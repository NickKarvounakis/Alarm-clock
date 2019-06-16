
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
    if(( current_hour === hours && minutes > current_minutes) || current_hour < hours ) // FIRST CASE
    {
    if(minutes - current_minutes < 0) // SECOND CASE
      {
         differencehour = hours - current_hour - 1
         differenceminute = 59-(Math.abs(minutes - current_minutes))
      }
    else{   //THIRD CASE
      differencehour = hours - current_hour
      differenceminute= minutes - current_minutes
    }}
    else{ //FOURTH CASE
      if(minutes < current_minutes)
        {
            differencehour = (24-(Math.abs(hours-current_hour)))-1
            differenceminute = (59 - Math.abs(minutes-current_minutes))
        }
      else if(minutes >= current_minutes)
      {
            differencehour = (24-(Math.abs(hours-current_hour)))
            differenceminute = minutes-current_minutes
      }}

    if( minutes-current_minutes > 0)
      {
         differenceminute = differenceminute-1
        differencesecond= 60 - Math.abs(current_seconds)
      }
    else if( minutes-current_minutes === 0){
      differencehour--
      differenceminute = 59
      differencesecond = 60-current_seconds
    }
    else if( minutes-current_minutes < 0){
        differencesecond =  60-Math.abs(current_seconds)
    }

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
    return ms_hours + ms_minutes + ms_seconds
  }
  // state.hours,state.minutes,state.repeat,state.song_url,state.song_name
  // hours,minutes,song_playing,song_url,name
  static  alarm(state) {
    let obj = {name:state.song_name}
    const time = this.time_left(state.hours,state.minutes)
    const amount = this.conventor(time.differencehour,time.differenceminute,time.differencesecond)
    // audio = new Audio(song_url)
     let obj2 = Object.assign({}, time, obj);
    // console.log('OBJECT2:',obj2)
    setTimeout(() => {
      audio = new Audio(state.song_url)
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
