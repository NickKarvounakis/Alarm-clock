import { createStore } from 'redux'
import App from './functions.js'
import constants from './constants'
const d =  new Date()
let audio

const initialState = {
  hours:d.getHours(),
  minutes:d.getMinutes(),
  schedule:[],
  song_playing:true,
  repeat:true,
  song_name:'classic-alarm-clock.mp3'
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
  return info
}

const conventor = (hours,minutes) => {
  const ms_hours = 3600000 * hours
  const ms_minutes = 60000 * minutes
  console.log('CONVERTED',ms_hours,ms_minutes)
  return ms_hours + ms_minutes
}

const alarm = (hours,minutes,song_playing,song_name) => {
  const time = time_left(hours,minutes)
  const amount = conventor(time.differencehour,time.differenceminute)
  console.log(time)
  setTimeout(() => {
    audio = new Audio(`./sounds/${song_name}`)
    console.log('now playing')
    if(song_playing)
    {
      audio.addEventListener('ended', function() {
          this.currentTime = 0
          this.play()
      }, false);
    }
    console.log(audio)
    audio.play();
  },amount);
  return time
}

const stop = () => {
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
      case constants.SUBMIT_ALARM_TIME:
        return Object.assign({}, state, {schedule: state.schedule.concat(alarm(state.hours,state.minutes,state.repeat,state.song_name))})
      case constants.STOP_SONG:
        return Object.assign({}, state, {song_playing:stop()})
      case constants.REPEAT_TRIGGER:
        return Object.assign({}, state, {repeat: !state.repeat})
      case constants.SONG_SET:
        return Object.assign({}, state, {song_name:action.value})
      default:
        return state
    }

}



const store = createStore(reducer)

export default store
