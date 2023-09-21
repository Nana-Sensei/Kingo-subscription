
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAmVLQrBrrAfvuKWjXur1T-apTPv6dYGA8",
  authDomain: "kin-go-learn.firebaseapp.com",
  projectId: "kin-go-learn",
  storageBucket: "kin-go-learn.appspot.com",
  messagingSenderId: "1096470866730",
  appId: "1:1096470866730:web:16f2b5e3f3e4fbfe50cc53"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);