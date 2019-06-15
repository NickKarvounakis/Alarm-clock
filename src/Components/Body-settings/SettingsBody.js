import React from 'react'
import { connect } from 'react-redux'

//JS File Imports
import constants from '../../store/constants'
import SongCards from './Modal/Modal.js'
import Upload from './upload-section/upload.js'

//Material UI Imports
import Grid from '@material-ui/core/Grid'; //for grid layout
import FormControlLabel from '@material-ui/core/FormControlLabel'; //for form component
import Typography from '@material-ui/core/Typography'; // for Typography component
import Switch from '@material-ui/core/Switch'; // for Switch Component
import FormGroup from '@material-ui/core/FormGroup'; // for form component




 function Settings(props){
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
              <Upload />
            </Grid>
            <Grid item>
              <SongCards />
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>

    )
}


const mapStateToProps = (state) => {
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
