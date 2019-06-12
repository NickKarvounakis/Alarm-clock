import {storage} from '../../firebase'

export const createProject = (image) => {
  return (dispatch,getState) => {
    console.log('IMAGE THAT COMES IN IS: ',image)
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
      console.error(error)
    },
     () => {
        //complete function
        console.log('props.image:',image.name)
        storage.ref('images').child(image.name).getDownloadURL().then (url => {
        console.log(url)
        dispatch({ type:'CREATE_PROJECT',url})

        })
    })



  }
}
