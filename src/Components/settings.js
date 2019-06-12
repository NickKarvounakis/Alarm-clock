import React from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'

import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


import { red } from '@material-ui/core/colors';



import constants from '../store/constants'
import SongCards from './Settings-song-Modal-Section/Modal.js'








const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  }
}))

 function Settings(props){
   const classes = useStyles();
// const [expanded, setExpanded] = React.useState(false);
//    function handleExpandClick() {
//   setExpanded(!expanded);
// }
  return(
      <React.Fragment>
      <Grid item sm={3}>
        <Grid container direction="column" justify="flex-start" alignItems="center">
          <Grid item>
            <Typography variant="h2">
                Settings
            </Typography>
          </Grid>
          <Grid item>
          <FormGroup row>
            <FormControlLabel  control={
                <Switch checked={props.repeat} onChange={props.repeat_handle} value={props.repeat} />
              }
              label=<Typography variant="h6">Repeat</Typography>
             />
          </FormGroup>
          </Grid>
          <Grid item>
            <Typography variant="h5" style={{color:'#00A480'}}>
                Alarm sound
            </Typography>
          </Grid>
          <Grid item>
            <Typography >
               Upload sound from your computer
            </Typography>
          </Grid>
          <Box mr={20}>
          <Grid item >
          <Button variant="contained" color="secondary" className={classes.button} >
                 UPLOAD
          </Button>
          </Grid>
          </Box>
          <Grid item>
            <SongCards />
          </Grid>
        </Grid>
      </Grid>
      </React.Fragment>

    )
}


const mapStateToProps = (state) => {
  console.log('state: ',state)
  return{
    repeat:state.repeat
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
      repeat_handle:() => {
        dispatch({type:constants.REPEAT_TRIGGER})
    },

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Settings)
