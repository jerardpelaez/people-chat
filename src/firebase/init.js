 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB9bNw7VYYSG05u4QodDCYUlfwe4MRxsfM",
    authDomain: "chat-app-475cd.firebaseapp.com",
    databaseURL: "https://chat-app-475cd.firebaseio.com",
    projectId: "chat-app-475cd",
    storageBucket: "chat-app-475cd.appspot.com",
    messagingSenderId: "410532433092",
    appId: "1:410532433092:web:af1fe08f4e32a13a6dcd91"
  };
  // Initialize Firebase
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    
    export default firebaseApp.firestore()