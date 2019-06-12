import React, { Component} from 'react'
import { connect } from 'react-redux'
import {storage} from '../firebase'
import { createProject } from '../store/actions/Action.js'


class Test extends Component {
  state = {
    image:null
  }


  filesubmit = (e) => {
    console.log('e: ', e.target.files[0])
    this.setState({
      image:e.target.files[0]
    })
  }

  render(){
  return(
    <div>
    <input type="file" onChange={this.filesubmit}/>
    <button onClick={() => this.props.createProject(this.state.image)}>uplaod</button>
    <img src={this.props.image_url || "http://via.placeholder.com/350x150"} alt="uploaded image"/>
    <button onClick={() => console.log(this.image_url)}>SHOW</button>
    </div>
  )
}

}

const mapDispatchToProps = (dispatch) => {
   return{
     Submit_file:(e) => {
       console.log('xd',e.target.files[0])
       dispatch({type:'UPLOAD_FILE',value:e.target.files[0]})
   },
   createProject: (image) => dispatch(createProject(image))
 }}









export default connect(null,mapDispatchToProps)(Test)
