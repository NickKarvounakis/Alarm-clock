import React, { Component} from 'react'
import { connect } from 'react-redux'
import { makeStyles} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';

import {storage} from '../../../firebase'
import { createProject } from '../../../store/actions/Action.js'
import Grid from '@material-ui/core/Grid';
import LinearDeterminate from './progressBar.js'



class Upload extends Component {
  state = {
    image:null,
    image_name:'Choose a file'
  }

  filesubmit = (e) => {
    console.log('e: ', e.target.files[0])
    this.setState({
      image:e.target.files[0],
      image_name:e.target.files[0].name
    })
  }

  render(){

  return(
    <div>

      <Typography >
         -Upload sound from your computer
      </Typography>
      <Grid container direction="column">
      <Grid item>
        <input name="file" type="file" id="file" onChange={this.filesubmit} accept=".mp3,.wav,.aac,.ogg,.wma,.falc,.alac,.wma" className="inputfile" data-multiple-caption="{count} files selected" />
        <Button variant="contained" color="secondary"><label htmlFor="file">{this.state.image_name}<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>
        </label></Button>
        <Button variant="contained" color="secondary"  onClick={() => this.props.createProject(this.state.image)} style={{marginLeft:'0.7em'}}>
           UPLOAD
        </Button>
      </Grid>
      <Grid item>

        <Typography >Uploading progress</Typography>
        <LinearDeterminate />

      </Grid>

              </Grid>


    </div>
  )
}

}

const mapStateToProps = (state) => {
  console.log('state: ',state)
  return{
    progress:state.upload_progress,
    song_name:state.song_name
  }
}

const mapDispatchToProps = (dispatch) => {
   return{
     Submit_file:(target) => {
       console.log('xd',target)
       dispatch({type:'UPLOAD_FILE',value:target})
   },
   createProject: (image) => dispatch(createProject(image))
 }}









export default connect(null,mapDispatchToProps)(Upload)
