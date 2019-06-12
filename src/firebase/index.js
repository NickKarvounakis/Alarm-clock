import firebase from 'firebase/app'
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyADEaDY-26kqkoxqnFxFH5f59nn5dgUsAs",
  authDomain: "react-alarm.firebaseapp.com",
  databaseURL: "https://react-alarm.firebaseio.com",
  projectId: "react-alarm",
  storageBucket: "react-alarm.appspot.com",
  messagingSenderId: "404986573548",
  appId: "1:404986573548:web:4314490a7d19caab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {
  storage, firebase as default
}
