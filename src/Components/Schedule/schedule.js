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
              song_name:[]
            }
            this.content = this.content.bind(this)
            // this.Decrement = this.Decrement.bind(this)
    }





 componentWillReceiveProps(nextProps){
  if(nextProps !== this.props)
  {
    // Pointer to the prop(bascially decrements the time-left until every alarm)
    let array2 = nextProps.count
    this.setState({
      counter:this.state.counter + 1
    })

    array2.forEach((tile,index) => {
      if(index > this.state.counter)
      {
         setInterval(() => {
                    if(tile.differencehour !== 0 || tile.differenceminute !== 0 || tile.differencesecond !== 0)
                    {
                    if(tile.differenceminute === 0 && tile.differencesecond === 0)
                        {
                          --tile.differencehour
                          tile.differenceminute = 59
                          tile.differencesecond = 59
                        }

                    else if(tile.differencesecond !== 0)
                      {
                      --tile.differencesecond
                      }
                    else if(tile.differencesecond === 0)
                      {
                      --tile.differenceminute
                      tile.differencesecond = 59
                      }
                    }
                    this.setState({
                      array_state:array2
                    })
        },1000)
          }
      	})
      }}


 content = () => {
  if(this.props.schedule.length > 0)
      {
        return(
          this.props.schedule.map((tile,index) => (
            <Box  mt={2} className="App" key={index + tile.name}>
              <Paper className="schedule ">
                <Grid   direction="row" className="timestamp " container >
                    <Grid item>
                      { tile.hoursx < 10 ?  <Typography variant="h1" style={margin_removal} >0{tile.hoursx}:</Typography> : <Typography variant="h1" style={margin_removal} >{tile.hoursx}:</Typography>}
                    </Grid>
                    <Grid item>
                      { tile.minutesx < 10 ?  <Typography variant="h1" style={margin_removal} >0{tile.minutesx}</Typography> : <Typography variant="h1" style={margin_removal}>{tile.minutesx}</Typography>}
                    </Grid>
                    <Grid container direction="column">
                      <Grid item><Typography>Sound:{tile.name}</Typography></Grid>
                      <Grid item>{tile.differencehour === 0 && tile.differenceminute === 0 && tile.differencesecond ===0 ? <Typography style={{color:'#f50057'}} variant="h6">Alarm Fired</Typography> :<Typography variant="h6">Time-left:{tile.differencehour} hours and {tile.differenceminute} minutes {tile.differencesecond} seconds</Typography>}</Grid>
                    </Grid>
                </Grid>


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
  return(
    <Box mt={5}>
      <Typography variant="h2">SCHEDULED ALARMS</Typography>
      {this.content()}
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
