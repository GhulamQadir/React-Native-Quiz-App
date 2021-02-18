import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth'

  // Your web app's Firebase configuration
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
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }    

export function login(email, password, loginComplete){
        firebase
        .auth().signInWithEmailAndPassword(email, password)
        .then(() => loginComplete())
        .catch((error) => alert(error));

        console.log("Email==>", email);
        console.log("Password==>", password)

}

export function signUp(email, password, signUpComplete){
  firebase
  .auth().createUserWithEmailAndPassword(email, password)
  .then(() => login(email, password, signUpComplete))
  .catch((error) => alert(error));

  console.log("SignUp Email==>", email);
  console.log("SignUp Password==>", password)
}

export function signOut(signedOut){
  firebase.auth().signOut().then(() => signedOut )
}

