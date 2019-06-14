const testCreator2 = (payload) => {
  console.log('payload:',payload)
  return (dispatch) => {
      
      const audio = new Audio(payload.mp3_path)
      audio.play()
      dispatch({type:'TRY_SONG',value:payload.mp3_path})
  }
}

export default testCreator2
