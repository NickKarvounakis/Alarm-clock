
export default class Timestamp  {

   static hour(hour,operation){
    let hours = hour

    if(operation === 'increment')
      {
        hours++;
        hours = hours === 24 ? 0 : hours
      }
    if(operation === 'decrement')
      {
        hours--;
        hours = hours === -1 ? 23 : hours
      }
      return hours
  }

   static minute(minute,operation){
    let minutes = minute

    if(operation === 'increment')
      {
        minutes++;
        minutes = minutes === 60 ? 0 : minutes
      }
      if(operation === 'decrement')
        {
          minutes--;
          minutes = minutes === -1 ? 59 : minutes
        }
      return minutes
  }
}
