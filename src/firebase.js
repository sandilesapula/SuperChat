import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyB3epfsHiCnaDgs8NcRmuY58cv5-MFOJr8",
  authDomain: "superchat-21571.firebaseapp.com",
  databaseURL: "https://superchat-21571-default-rtdb.firebaseio.com",
  projectId: "superchat-21571",
  storageBucket: "superchat-21571.appspot.com",
  messagingSenderId: "47601219673",
  appId: "1:47601219673:web:09afa3b64622b8d27b9948"

});

const db = firebaseApp.firestore();

export default db;