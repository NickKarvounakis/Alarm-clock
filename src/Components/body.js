import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Settings from './settings.js'
import Clock from './clock.js'









function Body(props){
  return(
    <div>
        <Typography variant="h1" >ALARM CLOCK</Typography>
        <Typography component="div">
          <Box textAlign="center"  fontSize="h6.fontSize">
              Your personal online alarm clock,made to keep your life in order
          </Box>
        </Typography>
      <Paper >
      <Box textAlign="center"  fontSize="h1.fontSize" mt={5} mb={10}>
        <Typography component="div" variant="h2">
            Add an alarm to your schedule!
        </Typography>
      </Box>
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
