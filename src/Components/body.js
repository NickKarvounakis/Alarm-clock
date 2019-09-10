import React from 'react'
import { connect } from 'react-redux'

//JS File Imports
import Settings from './Body-settings/SettingsBody.js'
import Clock from './Body-timer/clock.js'
import Header from './Header/Header.js'
import Schedule from '../Components/Schedule/schedule.js'

//Material UI Imports
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';




const Body = props => {
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


const mapStateToProps = state => {
  return{
    schedule:state.schedule
  }
}

export default connect(mapStateToProps)(Body)
