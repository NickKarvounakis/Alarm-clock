import { storage } from '../../../../firebase'

export const createProject = (image) => {
  return (dispatch,getState) => {
    if(image !== null){
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed',
        (snapshot) => {
          // progress function
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          dispatch({type:'PROGRESS',progress})
          if(progress === 100){
            progress = 0
            setTimeout(function(){ dispatch({type:'PROGRESS',progress}) }, 6000);
          }
        },
        (error) => {
          console.error(error)
        },
         () => {
            //complete function
            storage.ref('images').child(image.name).getDownloadURL().then (url => {
            dispatch({ type:'CREATE_PROJECT',url})
            dispatch({type:'SONG_SET',value:image.name})
            })
        })
  }
  }
}
