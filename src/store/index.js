import { createStore } from 'redux'
import App from './functions.js'
import constants from './constants'
const d =  new Date()


const initialState = {
  hours:d.getHours(),
  minutes:d.getMinutes(),
  schedule:[]
}


const alarm = (hours,minutes) => {
  let hoursx = hours
  let minutesx = minutes
  let differencehour
  let differenceminute
  const date = new Date()
  const current_minutes = date.getMinutes()
  const current_hour = date.getHours()
  console.log('differnce',minutesx - current_minutes)
  if(minutesx - current_minutes < 0)
    {
       differencehour = hoursx - 1
       differenceminute = 59-(Math.abs(minutesx - current_minutes))
    }
  else{
    differencehour = hoursx - current_hour
    differenceminute= minutesx - current_minutes
  }
  console.log('THE ALARM WILL LIGHT UP IN ',differencehour,'hours and', differenceminute, 'minutes')
  console.log('SCHEDULED ALARM',hoursx,minutesx)
  console.log('Minutes Now',current_minutes,'\nHours Now',current_hour)

   const ms_hours = 3600000 * differencehour
   const ms_minutes = 60000 * differenceminute
   console.log('CONVERTED',ms_hours,ms_minutes)
  setTimeout(function(){
    alert('wake up')
  },ms_hours + ms_minutes);
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
        return Object.assign({}, state, {schedule: alarm(state.hours,state.minutes)})
      default:
        return state
    }

}



const store = createStore(reducer)

export default store
