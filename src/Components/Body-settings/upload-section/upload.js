import React, { Component} from 'react'
import { connect } from 'react-redux'

//JS File Imports
import { createProject } from './actions/Action.js' //Action
import LinearDeterminate from './progressBar.js'
import CustomizedSnackbars from './snackbar2.js'
//Material UI Imports
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



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
        <Grid container direction = "row">
          <Grid item>
            <input name="file" type="file" id="file" onChange={this.filesubmit} accept=".mp3,.wav,.aac,.ogg,.wma,.falc,.alac,.wma" className="inputfile" data-multiple-caption="{count} files selected" />
            <Button variant="contained" color="secondary"><label htmlFor="file">{this.state.image_name}<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>
            </label></Button>
          </Grid>
        {this.state.image_name !== 'Choose a file' ?
          <Grid item><Button variant="contained" color="secondary"  onClick={() => this.props.createProject(this.state.image)} style={{marginLeft:'0.7em'}}>
             UPLOAD
          </Button></Grid> : <CustomizedSnackbars />}
        </Grid>
        <Grid item>
          {this.props.progress > 0 ?
              <div><Typography >Uploading progress</Typography><LinearDeterminate/></div> : <div></div>}
        </Grid>
      </Grid>
    </div>
  )
}

}

const mapStateToProps = (state) => {
  console.log('state: ',state)
  return{
    progress:state.upload_progress
  }
}


const mapDispatchToProps = (dispatch) => {
   return{
     Submit_file:(target) => {
       console.log('xd',target)
       dispatch({type:'UPLOAD_FILE',value:target})
   },
   createProject: (image) => {dispatch(createProject(image))}
 }}









export default connect(mapStateToProps,mapDispatchToProps)(Upload)
