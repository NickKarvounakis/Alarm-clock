import React from 'react'
import { connect } from 'react-redux'
import constants from '../store/constants'

function Clock(props){
  return(
    <div>
      <h1>ALARM CLOCK</h1>

      <button onClick={props.Increment_hours}>Increase hours</button>
      <button onClick={props.Decrement_hours}>Decrease hours</button>
      <button onClick={props.Increment_minutes}>Increase minutes</button>
      <button onClick={props.Decrement_minutes}>Decrease minutes</button>
      <div className="timestamp" >
        { props.hours < 10 ?  <h1>0{props.hours}:</h1> : <h1>{props.hours}:</h1>}
        { props.minutes < 10 ?  <h1>0{props.minutes}</h1> : <h1>{props.minutes}</h1>}
      </div>
      <button onClick={props.Submit}>Submit</button>
      <button onClick={props.stop}>Stop Playing</button>

    </div>
  )
}


const mapStateToProps = (state) => {
  console.log('state: ',state)
  return{
    minutes:state.minutes,
    hours:state.hours,
    schedule:state.schedule
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
      Increment_minutes: () => {
        dispatch({ type:constants.INCREASE_MINUTES})
      },
      Increment_hours: () => {
        dispatch({ type:constants.INCREASE_HOURS})
      },
      Decrement_minutes: () => {
        dispatch({ type:constants.DECREASE_MINUTES})
      },
      Decrement_hours: () => {
        dispatch({ type:constants.DECREASE_HOURS})
      },
      Submit: (evt) => {
        console.log(evt)
        dispatch({ type:constants.SUBMIT_ALARM_TIME,value:evt.target})
      },
      stop: () => {
        dispatch({ type:constants.STOP_SONG})
      }
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(Clock)
