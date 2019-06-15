//


  let audio2 = undefined
  let rev = undefined
  let temp = undefined
const testCreator2 = (payload,trigger,bool) => {
  return (dispatch) => {
      switch(bool)  //if function is being called by SongsGrid with an intent of playing the audio execute the code bellow
        {
          case false:
              if(audio2)
                audio2.pause()
              audio2 = new Audio(payload.mp3_path)
              if(payload.mp3_path === temp && rev)
                 audio2.pause()
              else
                  audio2.play()
              rev = !trigger
              temp = payload.mp3_path
              dispatch({type:'TRY_SONG',rev})
              break;
           case true:     //if function is being called by Modal with an intent of closing the modal and stopping all sounds that are currently playing execute the code bellow
              if(audio2)
                audio2.pause()
              break;
           default:
                break;
        }}
}

export default testCreator2
