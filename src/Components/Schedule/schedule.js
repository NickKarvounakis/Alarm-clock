import React, { Component} from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
const margin_removal = {
  marginBottom:"0px",
  marginTop:"0px",
  fontSize:'5rem'
}








  // CONDITIONAL RENDERING(CONDITION BEING THE SCHEDULE)

  class Schedule extends Component {

    constructor(){
      super()
            this.state = {
              hours_left:[[0,0]],
              minutes_left:[],
              count:[{differencehour:0,differenceminute:0}],
              counter:-1,
            }
            this.content = this.content.bind(this)
            // this.Decrement = this.Decrement.bind(this)
    }





 componentWillReceiveProps(nextProps){
  if(nextProps !== this.props)
  {


    let array2 = nextProps.count
    console.log(array2)

    array2.map((tile,index) => {
      console.log(tile)
      const timer = setInterval(() => {
         if(tile.differenceminute !== 0)
    	    console.log(index,':',tile.differencehour , ':' , tile.differenceminute--)
        else if(tile.differenceminute === 0)
          console.log(index,':',tile.differencehour-- , ':' , tile.differenceminute = 59)
        this.setState({
          array_state:array2
        })
              },5000)
      	})
}

}

// array = [{hours:5,minutes:30},{hours:2,minutes:15}]
//
// console.log(array)
// const timer = setInterval(() => {
// array.map(tile => {
// 	console.log(tile.hours-- , ':' , tile.minutes--)
//   	if(tile.hours ===0)
//       	clear(timer)
// })
// },5000)




 content = () => {
  if(this.props.schedule.length > 0)
      {
        return(
          this.props.schedule.map((tile,index) => (
            <Box mt={5} >
              <Paper className="schedule">
                <Grid   direction="row" className="timestamp " container >
                    <Grid item>
                      { tile.hoursx < 10 ?  <Typography variant="h1" style={margin_removal} >0{tile.hoursx}:</Typography> : <Typography variant="h1" style={margin_removal} >{tile.hoursx}:</Typography>}
                    </Grid>
                    <Grid item>
                      { tile.minutesx < 10 ?  <Typography variant="h1" style={margin_removal} >0{tile.minutesx}</Typography> : <Typography variant="h1" style={margin_removal}>{tile.minutesx}</Typography>}
                    </Grid>
                    <Grid container direction="column">
                      <Grid item><Typography>Sound:{tile.name}</Typography></Grid>
                      <Grid item><Typography>Time-left:{tile.differencehour} hours and {tile.differenceminute} minutes</Typography></Grid>
                    </Grid>
                </Grid>
                <Button onClick={() => this.props.repeat_handle(this.props.audio)}>stop</Button>

              </Paper>
            </Box>
          )))
        }
    else {
      return(
        <Box className="center" >
        <Typography variant="h5" className="center-text">You haven't scheduled any alarms so far.Submit one to get going</Typography>
        </Box>
      )
    }}

  render(){


  console.log('COUNT----------->',this.props.count)
  console.log(this.state.array_state)
  return(
    <Box mt={5}>
      <Typography variant="h2">SCHEDULED ALARMS</Typography>
      {this.content()}
      {this.state.hours_left.map((tile,index) => (

         tile[0] !== 0 || tile[1] !==0 ?  <Typography variant="h1" style={margin_removal} >0{tile[0]}:{tile[1]}</Typography> : <Typography>Empty</Typography>
      ))}
    <content />


    </Box>
  )
}
}









const mapStateToProps = (state) => {
  return{
    schedule:state.schedule
  }
}


const mapDispatchToProps = (dispatch) => {
    return{
      repeat_handle:(payload) => {
        dispatch({type:'STOP_SONG',value:payload})
    },

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Schedule)
