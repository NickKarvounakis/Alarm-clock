import React from 'react'
import { connect } from 'react-redux'


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
    </div>
  )





  // const mapDispatchToProps = (dispatch) => {
  //   return{
  //     handleInputChange: (evt) => {
  //       console.log('handle input change happenin')
  //       dispatch({ type:'SEARCH_INPUT_CHANGE',value: evt.target.value})
  //     },
  //     handleSubmit: (evt,query) => {
  //       evt.preventDefault()
  //       Api.getRepos(dispatch,query)
  //
  //     }
  //   }
  // }




}


const mapStateToProps = (state) => {
  console.log(state)
  return{
    minutes:state.minutes,
    hours:state.hours
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
      Increment_minutes: () => {
        dispatch({ type:'INCREASE_MINUTES'})
      },
      Increment_hours: () => {
        dispatch({ type:'INCREASE_HOURS'})
      },
      Decrement_minutes: () => {
        dispatch({ type:'DECREASE_MINUTES'})
      },
      Decrement_hours: () => {
        dispatch({ type:'DECREASE_HOURS'})
      }
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(Clock)
