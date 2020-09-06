import * as firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBwO3daE_-uCuYbjJuVYKLJtpVJAdpB2R0",
    authDomain: "willy-2b8e0.firebaseapp.com",
    databaseURL: "https://willy-2b8e0.firebaseio.com",
    projectId: "willy-2b8e0",
    storageBucket: "willy-2b8e0.appspot.com",
    messagingSenderId: "1091685688329",
    appId: "1:1091685688329:web:e6138ba369bf6487e584d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()