import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyAaYbT-wT12qkx0vDMA1YB0ODmjA99Es-4",
    authDomain: "aisyahreactnative.firebaseapp.com",
    databaseURL: "https://aisyahreactnative.firebaseio.com",
    projectId: "aisyahreactnative",
    storageBucket: "aisyahreactnative.appspot.com",
    messagingSenderId: "98821544384",
    appId: "1:98821544384:web:a058521ec41dc36b"
  };
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);