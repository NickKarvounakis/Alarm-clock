import { createStore, applyMiddleware } from 'redux'
import Timestamp from './functions/Timer_manipulation_functions.js'         //contains functions that manipulate the timer to be set
import Timer from './functions/Timer_setting_functions.js' //contains functions that set the alarm
import constants from './constants'
import thunk from 'redux-thunk'



const d =  new Date()
const initialState = {
  hours:d.getHours(),
  minutes:d.getMinutes(),
  schedule:[],
  song_playing:true,
  repeat:true,
  song_url:'./sounds/classic-alarm-clock.mp3',
  song_name:'classic alarm',
  upload_progress:0,
  trigger:false,                              //Decides whether the PREVIEW button on the modal section will either start playing the preview or stop

}


const reducer = (state = initialState,action) => {
    switch(action.type){

      case constants.INCREASE_HOURS:
        return Object.assign({}, state, {hours: Timestamp.hour(state.hours,'increment')})
      case constants.DECREASE_HOURS:
        return Object.assign({}, state, {hours: Timestamp.hour(state.hours,'decrement')})
      case constants.INCREASE_MINUTES:
        return Object.assign({}, state, { minutes: Timestamp.minute(state.minutes,'increment')})
      case constants.DECREASE_MINUTES:
        return Object.assign({}, state, { minutes: Timestamp.minute(state.minutes,'decrement')})
      case constants.SUBMIT_ALARM_TIME: //USER SUBMITS AN ALARM(WITH A TIMER)
        return Object.assign({}, state, {schedule: state.schedule.concat(Timer.alarm(state))})
      case constants.TRY_SONG:
        return Object.assign({}, state, {trigger: action.rev})
      case constants.STOP_SONG:
        return Object.assign({}, state, {song_playing:Timer.stop()})
      case constants.REPEAT_TRIGGER:
        return Object.assign({}, state, {repeat: !state.repeat})
      case constants.SONG_SET:
        return Object.assign({}, state, {song_name:action.value})
      case constants.UPLOAD_FILE:
        return Object.assign({}, state, {song_name:action.value})
      case constants.CREATE_PROJECT:
        return Object.assign({}, state, {song_url:action.url})
      case constants.PROGRESS:
        return Object.assign({}, state, {upload_progress:action.progress})
      default:
        return state
    }

}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
