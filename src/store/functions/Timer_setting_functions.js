
let audio = ''
export default class Timer  {


  static time_left(hours,minutes){
    let differencehour
    let differenceminute
    let differencesecond
    const date = new Date()
    const current_minutes = date.getMinutes()
    const current_hour = date.getHours()
    const current_seconds = date.getSeconds()
    console.log('--------------------------------####',current_seconds)
    console.log('DIFFERENCE',current_seconds)
    console.log('differnce',minutes - current_minutes)
    console.log('------------current_hour',current_hour,'hourx----------',hours)
    if(( current_hour === hours && minutes > current_minutes) || current_hour < hours ) // FIRST CASE
    {
          console.log('FIRST CASE')
    if(minutes - current_minutes < 0) // SECOND CASE
      {
            console.log('SECOND CASE')
         differencehour = hours - current_hour - 1
         differenceminute = 59-(Math.abs(minutes - current_minutes))
      }
    else{   //THIRD CASE
          console.log('THIRD CASE')
      differencehour = hours - current_hour
      differenceminute= minutes - current_minutes
      console.log(`differencehour = ${differencehour} differenceminute = ${differenceminute}`)
    }}
    else{ //FOURTH CASE
      console.log('FOURTH CASE')
      if(minutes < current_minutes)
        {
            differencehour = (24-(Math.abs(hours-current_hour)))-1
            differenceminute = (59 - Math.abs(minutes-current_minutes))
            console.log(`DIFFERENCEMINUTE:      ${differenceminute}`)
        }
      else if(minutes >= current_minutes)
      {
            differencehour = (24-(Math.abs(hours-current_hour)))
            differenceminute = minutes-current_minutes
      }}

    if(current_seconds > 0 && minutes-current_minutes > 0)
      {
         differenceminute = differenceminute-1
        differencesecond= 60 - Math.abs(current_seconds)
        console.log('FOURTH CASE')
      }
    else if(current_seconds >0 && minutes-current_minutes === 0){
      differencehour--
      differenceminute = 59
      differencesecond = 60-current_seconds
      console.log('FIFTH CASE')
    }
    else if(current_seconds >0 && minutes-current_minutes < 0){
        // differenceminute = differenceminute-1
        differencesecond =  60-Math.abs(current_seconds)
            console.log('SIXTH CASE')
    }


    console.log('THE ALARM WILL LIGHT UP IN ',differencehour,'hours and', differenceminute, 'minutes')
    console.log('SCHEDULED ALARM',hours,minutes)
    console.log('Minutes Now',current_minutes,'\nHours Now',current_hour)
    const info = {
      hoursx:hours,
      minutesx:minutes,
      differencehour:differencehour,
      differenceminute:differenceminute,
      differencesecond:differencesecond
    }
    return info   //
  }

  static  conventor(hours,minutes,seconds){
    const ms_hours = 3600000 * hours
    const ms_minutes = 60000 * minutes
    const ms_seconds = 1000 * seconds
    console.log('CONVERTED',ms_hours,ms_minutes)
    return ms_hours + ms_minutes + ms_seconds
  }
  // state.hours,state.minutes,state.repeat,state.song_url,state.song_name
  // hours,minutes,song_playing,song_url,name
  static  alarm(state) {
    let obj = {name:state.song_name}
    const time = this.time_left(state.hours,state.minutes)
    console.log(time)
    const amount = this.conventor(time.differencehour,time.differenceminute,time.differencesecond)
    console.log(time)
    // audio = new Audio(song_url)
     let obj2 = Object.assign({}, time, obj);
    // console.log('OBJECT2:',obj2)
    setTimeout(() => {
      audio = new Audio(state.song_url)
      console.log('now playing',audio)
      if(state.repeat)
      {
        audio.addEventListener('ended', function() {
            this.currentTime = 0
            this.play()
        }, false);
      }

      audio.play();
    },amount);
    return obj2
  }

  static stop() {
    if(audio)
      {
        audio.pause()
        return false;
      }
    return true;
  }


}
