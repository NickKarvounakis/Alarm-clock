import { createStore, applyMiddleware } from 'redux'
import App from './functions.js'
import constants from './constants'

import {storage} from '../firebase'
import * as Promise from "bluebird";
import thunk from 'redux-thunk'

const d =  new Date()
let audio
var monka



const initialState = {
  hours:d.getHours(),
  minutes:d.getMinutes(),
  schedule:[],
  song_playing:true,
  repeat:true,
  song_name:'./sounds/classic-alarm-clock.mp3',
  image:null,
  image_url:''
}


const time_left = (hours,minutes) => {
  let hoursx = hours
  let minutesx = minutes
  let differencehour
  let differenceminute
  const date = new Date()
  const current_minutes = date.getMinutes()
  const current_hour = date.getHours()
  console.log('differnce',minutesx - current_minutes)
  console.log('------------current_hour',current_hour,'hourx----------',hoursx)
  if(current_hour <= hoursx) // FIRST CASE
  {
        console.log('FIRST CASE')
  if(minutesx - current_minutes < 0) // SECOND CASE
    {
          console.log('SECOND CASE')
       differencehour = hoursx - current_hour - 1
       differenceminute = 59-(Math.abs(minutesx - current_minutes))
    }
  else{   //THIRD CASE
        console.log('THIRD CASE')
    differencehour = hoursx - current_hour
    differenceminute= minutesx - current_minutes
  }
  }
  else{ //FOURTH CASE
    console.log('FOURTH CASE')
    differencehour = 23-(Math.abs(hoursx-current_hour))
    differenceminute = 59 - (Math.abs(minutesx-current_minutes))
  }
  console.log('THE ALARM WILL LIGHT UP IN ',differencehour,'hours and', differenceminute, 'minutes')
  console.log('SCHEDULED ALARM',hoursx,minutesx)
  console.log('Minutes Now',current_minutes,'\nHours Now',current_hour)
  const info = {
    hoursx:hoursx,
    minutesx:minutesx,
    differencehour:differencehour,
    differenceminute:differenceminute
  }
  return info
}

const conventor = (hours,minutes) => {
  const ms_hours = 3600000 * hours
  const ms_minutes = 60000 * minutes
  console.log('CONVERTED',ms_hours,ms_minutes)
  return ms_hours + ms_minutes
}

const alarm = (hours,minutes,song_playing,song_name) => {
  const time = time_left(hours,minutes)
  const amount = conventor(time.differencehour,time.differenceminute)
  console.log(time)
  console.log('SONG_NAME',song_name)
  setTimeout(() => {
    audio = new Audio(song_name)
    console.log('now playing')
    if(song_playing)
    {
      audio.addEventListener('ended', function() {
          this.currentTime = 0
          this.play()
      }, false);
    }
    console.log(audio)
    audio.play();
  },amount);
  return time
}

const stop = () => {
  if(audio)
    {
      audio.pause()
      return false;
    }
  return true;
}






const handleUpload = (image) => {
return new Promise(function(resolve,reject){
console.log('---------UploadTask = ',image.name)
const uploadTask = storage.ref(`images/${image.name}`).put(image)
uploadTask.on('state_changed',
(snapshot) => {
  // progress function
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
},
(error) => {
  //error function
  reject(error)
},
 () => {
    //complete function
    console.log('props.image:',image.name)
    storage.ref('images').child(image.name).getDownloadURL().then (url => {
      console.log(url)
       resolve(url)
    })
})
})

}

async function getData(value){
  const result = await handleUpload(value)
  monka = result
  console.log(monka)
  return result
}




const reducer = (state = initialState,action) => {
    console.log('reducer',action)
    switch(action.type){

      case constants.INCREASE_HOURS:
        return Object.assign({}, state, {hours: App.hour(state.hours,'increment')})
      case constants.DECREASE_HOURS:
        return Object.assign({}, state, {hours: App.hour(state.hours,'decrement')})
      case constants.INCREASE_MINUTES:
        return Object.assign({}, state, { minutes: App.minute(state.minutes,'increment')})
      case constants.DECREASE_MINUTES:
        return Object.assign({}, state, { minutes: App.minute(state.minutes,'decrement')})
      case constants.SUBMIT_ALARM_TIME:
        return Object.assign({}, state, {schedule: state.schedule.concat(alarm(state.hours,state.minutes,state.repeat,state.song_name))})
      case constants.STOP_SONG:
        return Object.assign({}, state, {song_playing:stop()})
      case constants.REPEAT_TRIGGER:
        return Object.assign({}, state, {repeat: !state.repeat})
      case constants.SONG_SET:
        return Object.assign({}, state, {song_name:action.value})
      case 'UPLOAD_FILE':
        return Object.assign({}, state, {image:action.value})
      case 'UPLOAD2_FILE':
        return Object.assign({}, state, {image_url:state.image_url.concat(getData(state.image))})
      case 'CREATE_PROJECT':
        return Object.assign({}, state, {song_name:action.url})
      default:
        return state
    }

}



const store = createStore(reducer, applyMiddleware(thunk))


store.subscribe(() => {
  console.log('state updated')
  console.log('monka: ',monka)
  console.log('STORE:',store.getState())
})



export default store
