const testCreator = payload => {
  return dispatch => {
      dispatch({ type:'SONG_SET',value:payload.mp3_name })
      dispatch({ type:'CREATE_PROJECT',url:payload.mp3_path })
  }
}

export default testCreator
