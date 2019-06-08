import { createStore } from 'redux'
import App from './functions.js'
import constants from './constants'
const d =  new Date()


const initialState = {
  hours:d.getHours(),
  minutes:d.getMinutes()
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
      default:
        return state
    }

}



const store = createStore(reducer)

export default store
