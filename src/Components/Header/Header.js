import React from 'react'

//IMPORTING MATERIAL-UI COMPONENTS
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Header(props){
return(
      <React.Fragment>
      <Typography variant="h1" >ALARM CLOCK</Typography>
      <Typography component="div">
        <Box textAlign="center"  fontSize="h6.fontSize">
            Your personal online alarm clock,made to keep your life in order
        </Box>
      </Typography>

        <Box textAlign="center"  fontSize="h1.fontSize" mt={5} mb={10}>
          <Typography component="div" variant="h2">
            Add an alarm to your schedule!
          </Typography>
        </Box>

     </React.Fragment>
)
}
