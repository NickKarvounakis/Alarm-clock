import { createStore } from 'redux'

const d =  new Date()


const initialState = {
  hours:d.getHours(),
  minutes:d.getMinutes()
}


const hour = (hour,operation) => {
  let hours = hour

  if(operation === 'increment')
    {
      hours++;
      hours = hours === 24 ? 0 : hours
    }
  if(operation === 'decrement')
    {
      hours--;
      hours = hours === -1 ? 23 : hours
    }
    return hours
}

const minute = (minute,operation) => {
  let minutes = minute

  if(operation === 'increment')
    {
      minutes++;
      minutes = minutes === 60 ? 0 : minutes
    }
    if(operation === 'decrement')
      {
        minutes--;
        minutes = minutes === -1 ? 59 : minutes
      }
    return minutes
}


const reducer = (state = initialState,action) => {
    console.log('reducer',action)

    switch(action.type){

      case 'INCREASE_HOURS':
        return Object.assign({}, state, {hours: hour(state.hours,'increment')})
      case 'DECREASE_HOURS':
        return Object.assign({}, state, {hours: hour(state.hours,'decrement')})
      case 'INCREASE_MINUTES':
        return Object.assign({}, state, { minutes: minute(state.minutes,'increment')})
      case 'DECREASE_MINUTES':
        return Object.assign({}, state, { minutes: minute(state.minutes,'decrement')})
      default:
        return state
    }

}



const store = createStore(reducer)

export default store
