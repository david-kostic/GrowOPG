import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBiDzOP1SCfSaBh7BPQnu5o83azZ_FFDpk",
    authDomain: "growopg.firebaseapp.com",
    projectId: "growopg",
    storageBucket: "growopg.appspot.com",
    messagingSenderId: "1047214705670",
    appId: "1:1047214705670:web:dd285c2b0ff9b4381f4787"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase