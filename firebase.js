// Import the functions you need from the SDKs you need

import  firebase from "firebase/compat/app";
import 'firebase/compat/database'
import 'firebase/compat/auth'


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtwDwVaI9EIlCmYXF8a4nRgdk-2G0oZk4",
  authDomain: "appcompras-2bf70.firebaseapp.com",
  projectId: "appcompras-2bf70",
  storageBucket: "appcompras-2bf70.appspot.com",
  messagingSenderId: "702349281369",
  appId: "1:702349281369:web:0ebdacb8dd283baf1cc948",
  measurementId: "G-E0DFBBKFE3"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}
const auth = firebase.auth()

export {auth}