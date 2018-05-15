import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBVYUfH1OzdYqzRaCFSdXaE6t78GcjFiyQ",
  authDomain: "react-firebase-auth-a7cbc.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-a7cbc.firebaseio.com",
  projectId: "react-firebase-auth-a7cbc",
  storageBucket: "react-firebase-auth-a7cbc.appspot.com",
  messagingSenderId: "37545289510"
  };
const fire = firebase.initializeApp(config);
export default fire