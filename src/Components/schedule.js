import React from 'react'
import { connect } from 'react-redux'
import constants from '../store/constants'



function Schedule(props){
  return(
    <div>
    <h1>SCHEDULE</h1>
    {props.schedule.map((plan) => {
      return(<div className="timestamp" key={plan.hoursx + plan.minutesx + Math.floor(Math.random() * 1000)}>
              { plan.hoursx < 10 ?  <h1>0{plan.hoursx}:</h1> : <h1>{plan.hoursx}:</h1>}
              { plan.minutesx < 10 ?  <h1>0{plan.minutesx}</h1> : <h1>{plan.minutesx}</h1>}
            </div>)
    })}
    </div>
  )
}









const mapStateToProps = (state) => {
  console.log('state: ',state)
  return{
    schedule:state.schedule
  }
}





export default connect(mapStateToProps)(Schedule)
