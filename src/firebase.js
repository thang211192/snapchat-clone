import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjz8MafyFYpqygI-vzWXHktRAW5bW43u8",
    authDomain: "snapchat-clone-5063d.firebaseapp.com",
    projectId: "snapchat-clone-5063d",
    storageBucket: "snapchat-clone-5063d.appspot.com",
    messagingSenderId: "339071361837",
    appId: "1:339071361837:web:80990eabd755d3f6aa29a4",
    measurementId: "G-M76GJNXJ0E"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage }