import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux'
import Settings from './Body-settings/SettingsBody.js'
import Clock from './Body-timer/clock.js'
import Header from './Header/Header.js'
import Schedule from '../Components/Schedule/schedule'







function Body(props){
  return(
    <div>
      <Header />
      <Box  className="test">
        <Grid container direction="row" justify="center">
          <Clock />
          <Settings />
        </Grid>
      </Box>
      <Schedule count={props.schedule}/>
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log('state: ',state)
  return{
    schedule:state.schedule
  }
}

export default connect(mapStateToProps)(Body)
