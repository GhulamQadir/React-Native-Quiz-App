import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCJPcZJvFiFC8o3LWJsoYfMEUWtOS4JF1I",
    authDomain: "calc-26dfe.firebaseapp.com",
    databaseURL: "https://calc-26dfe.firebaseio.com",
    projectId: "calc-26dfe",
    storageBucket: "calc-26dfe.appspot.com",
    messagingSenderId: "1064800039370",
    appId: "1:1064800039370:web:09c4299fe54dfa97785f33"
  };
  // Initialize Firebase
var Firebase = firebase.initializeApp(firebaseConfig);
export default firebase;