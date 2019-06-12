import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Settings from './Body-settings/SettingsBody.js'
import Clock from './Body-timer/clock.js'
import Header from './Header/Header.js'








function Body(props){
  return(
    <div>
      <Paper>
      <Header />
      <Box  className="test">
        <Grid container direction="row" justify="center">
          <Clock />
          <Settings />
        </Grid>
      </Box>
      </Paper>
    </div>
  )
}

export default Body
