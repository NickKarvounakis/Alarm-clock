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
  schedule:[],
  song_playing:true,
  repeat:true,
  song_url:'./sounds/classic-alarm-clock.mp3',
  song_name:'classic alarm',
  upload_progress:0
}


const time_left = (hours,minutes) => {
  let hoursx = hours
  let minutesx = minutes
  let differencehour
  let differenceminute
  const date = new Date()
  const current_minutes = date.getMinutes()
  const current_hour = date.getHours()
  console.log('differnce',minutesx - current_minutes)
  console.log('------------current_hour',current_hour,'hourx----------',hoursx)
  if(current_hour <= hoursx) // FIRST CASE
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
  }
  }
  else{ //FOURTH CASE
    console.log('FOURTH CASE')
    differencehour = 23-(Math.abs(hoursx-current_hour))
    differenceminute = 59 - (Math.abs(minutesx-current_minutes))
  }
  console.log('THE ALARM WILL LIGHT UP IN ',differencehour,'hours and', differenceminute, 'minutes')
  console.log('SCHEDULED ALARM',hoursx,minutesx)
  console.log('Minutes Now',current_minutes,'\nHours Now',current_hour)
  const info = {
    hoursx:hoursx,
    minutesx:minutesx,
    differencehour:differencehour,
    differenceminute:differenceminute
  }
  return info   //
}

const conventor = (hours,minutes) => {
  const ms_hours = 3600000 * hours
  const ms_minutes = 60000 * minutes
  console.log('CONVERTED',ms_hours,ms_minutes)
  return ms_hours + ms_minutes
}
// state.hours,state.minutes,state.repeat,state.song_url,state.song_name
// hours,minutes,song_playing,song_url,name
const alarm = (state) => {
  let obj = {name:state.song_name}
  console.log('---------------------------->',obj)
  console.log('##PRE--------AUDIO----->',audio)
  const time = time_left(state.hours,state.minutes)

  const amount = conventor(time.differencehour,time.differenceminute)
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
          return Object.assign({}, state, {schedule: state.schedule.concat(alarm(0,0,0,action.value,0))})
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
