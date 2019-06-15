
  let audio2 = undefined
  let rev = undefined
  let temp = undefined
const testCreator2 = (payload,sample,audio) => {
  return (dispatch) => {
                          if(audio2)
                            audio2.pause()
                          audio2 = new Audio(payload.mp3_path)
                          if(payload.mp3_path === temp && rev)
                             audio2.pause()
                          else
                              audio2.play()
                          rev = !sample
                          temp = payload.mp3_path
                          dispatch({type:'TRY_SONG',rev})
            }
}

export default testCreator2
