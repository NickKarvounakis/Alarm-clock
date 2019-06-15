import { createStore, applyMiddleware } from 'redux'
import App from './functions.js'
import constants from './constants'

import {storage} from '../firebase'
import thunk from 'redux-thunk'

const d =  new Date()
let audio = ''
var monka



const initialState = {
  hours:d.getHours(),
  minutes:d.getMinutes(),
  seconds:d.getSeconds(),
  schedule:[],
  song_playing:true,
  repeat:true,
  song_url:'./sounds/classic-alarm-clock.mp3',
  song_name:'classic alarm',
  upload_progress:0,
  sample:false,

}


const time_left = (hours,minutes,seconds) => {
  let hoursx = hours
  let minutesx = minutes
  let secondsx = seconds
  let differencehour
  let differenceminute
  let differencesecond
  const date = new Date()
  const current_minutes = date.getMinutes()
  const current_hour = date.getHours()
  const current_seconds = date.getSeconds()
  console.log('--------------------------------####',current_seconds)
  console.log('DIFFERENCE',current_seconds)
  console.log('differnce',minutesx - current_minutes)
  console.log('------------current_hour',current_hour,'hourx----------',hoursx)
  if(current_hour < hoursx || current_hour === hoursx && minutesx > current_minutes) // FIRST CASE
  {
        console.log('FIRST CASE')
  if(minutesx - current_minutes < 0) // SECOND CASE
    {
          console.log('SECOND CASE')
       differencehour = hoursx - current_hour - 1
       differenceminute = 59-(Math.abs(minutesx - current_minutes))
    }
  else{   //THIRD CASE
        console.log('THIRD CASE')
    differencehour = hoursx - current_hour
    differenceminute= minutesx - current_minutes
    console.log(`differencehour = ${differencehour} differenceminute = ${differenceminute}`)
  }


  }

  else{ //FOURTH CASE
    console.log('FOURTH CASE')
    if(minutesx < current_minutes)
      {
          differencehour = (24-(Math.abs(hoursx-current_hour)))-1
          differenceminute = (59 - Math.abs(minutesx-current_minutes))
          console.log(`DIFFERENCEMINUTE:      ${differenceminute}`)
      }
    else if(minutesx >= current_minutes)
    {
          differencehour = (24-(Math.abs(hoursx-current_hour)))
          differenceminute = minutesx-current_minutes
    }
    // else if(minutesx === current_minutes){
    //   differencehour = (12-(Math.abs(hoursx-current_hour)))
    //   differenceminute = minutesx-current_minutes
    //
    // }
    // differencehour = 23-(Math.abs(hoursx-current_hour))
    // differenceminute = 59 - (Math.abs(minutesx-current_minutes))
  }

  if(current_seconds > 0 && minutesx-current_minutes > 0)
    {
       differenceminute = differenceminute-1
      differencesecond= 60 - Math.abs(current_seconds)
      console.log('FOURTH CASE')
    }
  else if(current_seconds >0 && minutesx-current_minutes === 0){
    differencehour--
    differenceminute = 59
    differencesecond = 60-current_seconds
    console.log('FIFTH CASE')
  }
  else if(current_seconds >0 && minutesx-current_minutes < 0){
      // differenceminute = differenceminute-1
      differencesecond =  60-Math.abs(current_seconds)
          console.log('SIXTH CASE')
  }


  console.log('THE ALARM WILL LIGHT UP IN ',differencehour,'hours and', differenceminute, 'minutes')
  console.log('SCHEDULED ALARM',hoursx,minutesx)
  console.log('Minutes Now',current_minutes,'\nHours Now',current_hour)
  const info = {
    hoursx:hoursx,
    minutesx:minutesx,
    differencehour:differencehour,
    differenceminute:differenceminute,
    differencesecond:differencesecond
  }
  return info   //
}

const conventor = (hours,minutes,seconds) => {
  const ms_hours = 3600000 * hours
  const ms_minutes = 60000 * minutes
  const ms_seconds = 1000 * seconds
  console.log('CONVERTED',ms_hours,ms_minutes)
  return ms_hours + ms_minutes + ms_seconds
}
// state.hours,state.minutes,state.repeat,state.song_url,state.song_name
// hours,minutes,song_playing,song_url,name
const alarm = (state) => {
  let obj = {name:state.song_name}
  console.log('---------------------------->',obj)
  console.log('##PRE--------AUDIO----->',audio)
  const time = time_left(state.hours,state.minutes,state.seconds)
  console.log(time)
  const amount = conventor(time.differencehour,time.differenceminute,time.differencesecond)
  console.log(time)
  console.log('SONG_NAME',state.song_url)
  // audio = new Audio(song_url)
   let obj2 = Object.assign({}, time, obj);
  // console.log('OBJECT2:',obj2)
  setTimeout(() => {
    audio = new Audio(state.song_url)
    console.log('now playing',audio)
    if(state.repeat)
    {
      audio.addEventListener('ended', function() {
          this.currentTime = 0
          this.play()
      }, false);
    }

    audio.play();
  },amount);
    console.log('###AFTER--------AUDIO----->',audio)
  return obj2
}

const stop = (audio) => {
  if(audio)
    {
      audio.pause()
      return false;
    }
  return true;
}










const reducer = (state = initialState,action) => {
    console.log('reducer',action)
    switch(action.type){

      case constants.INCREASE_HOURS:
        return Object.assign({}, state, {hours: App.hour(state.hours,'increment')})
      case constants.DECREASE_HOURS:
        return Object.assign({}, state, {hours: App.hour(state.hours,'decrement')})
      case constants.INCREASE_MINUTES:
        return Object.assign({}, state, { minutes: App.minute(state.minutes,'increment')})
      case constants.DECREASE_MINUTES:
        return Object.assign({}, state, { minutes: App.minute(state.minutes,'decrement')})
      case constants.SUBMIT_ALARM_TIME: //USER SUBMITS AN ALARM(WITH A TIMER)
        return Object.assign({}, state, {schedule: state.schedule.concat(alarm(state))})
        case constants.TRY_SONG:
          return Object.assign({}, state, {sample: action.rev})
      case constants.STOP_SONG:
        return Object.assign({}, state, {song_playing:stop(audio)})
      case constants.REPEAT_TRIGGER:
        return Object.assign({}, state, {repeat: !state.repeat})
      case constants.SONG_SET:
        return Object.assign({}, state, {song_name:action.value})
      case constants.UPLOAD_FILE:
        return Object.assign({}, state, {song_name:action.value})
      case constants.CREATE_PROJECT:
        return Object.assign({}, state, {song_url:action.url})
      case constants.PROGRESS:
        console.log('Progress:',action.progress,'%')
        return Object.assign({}, state, {upload_progress:action.progress})
      case 'STOP_SONG':
        return Object.assign({}, state, {song_playing:stop(action.value)})
      default:
        return state
    }

}



const store = createStore(reducer, applyMiddleware(thunk))


store.subscribe(() => {
  console.log('state updated')
  console.log('STORE:',store.getState())
})



export default store
