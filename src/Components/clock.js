import React from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import constants from '../store/constants'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';






// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     display: 'none',
//   },
// }));

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const margin_removal = {
  marginBottom:"0px",
  marginTop:"0px",
  fontSize:'9rem'
}

 function Clock(props){

  return(
    <Grid item lg={3}>
    <Grid container  direction="column"   justify="center"  alignItems="center">
      <Grid   direction="row" className="timestamp" container >
          <Grid item>
            { props.hours < 10 ?  <Typography variant="h1" style={margin_removal} >0{props.hours}:</Typography> : <Typography variant="h1" style={margin_removal} >{props.hours}:</Typography>}
          </Grid>
          <Grid item>
            { props.minutes < 10 ?  <Typography variant="h1" style={margin_removal} >0{props.minutes}</Typography> : <Typography variant="h1" style={margin_removal}>{props.minutes}</Typography>}
          </Grid>
      </Grid>

      <Grid  container direction="row"  >
        <Grid item>
          <img src="cross3.png" alt="plus" width="50" onClick={props.Increment_hours} style={{marginRight:'0.5em'}} className="clock-button"/>
        </Grid>
        <Grid item>
          <img src="minus.svg" alt="plus" width="50" onClick={props.Decrement_hours} style={{marginRight:'6em'}} className="clock-button"/>
        </Grid>
        <Grid item>
          <img src="cross3.png" alt="plus" width="50" onClick={props.Increment_minutes} style={{marginRight:'0.5em'}} className="clock-button"/>
        </Grid>
        <Grid item>
          <img src="minus.svg" alt="plus" width="50" onClick={props.Decrement_minutes} className="clock-button"/>
        </Grid>
      </Grid>
    </Grid>
        <Grid container direction="row" justify="flex-start" alignItems="center" >
          <Grid item  xs={4}>
            <StyledButton onClick={props.Submit}>Submit</StyledButton>
          </Grid>
          <Grid item xs={4}>
            <StyledButton onClick={props.stop}>Stop Playing</StyledButton>
          </Grid>
        </Grid>
      </Grid >
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
