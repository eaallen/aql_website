import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Firebase } from "./contexts/firebase";

import firebase from "firebase/app";
import { FIREBASE_CONFIG } from './private/firebase'

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
// import Material from './contexts/material/Material';

// initalize firebase 
// from https://stackoverflow.com/questions/43331011/firebase-app-named-default-already-exists-app-duplicate-app
if (!firebase.apps.length) {
  console.info('Initalized Firebase App at index.js')
  firebase.initializeApp(FIREBASE_CONFIG);
} else {
  firebase.app(); // if already initialized, use that one
}
// ---------------- set up listeners ----------------
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     console.log('user---->', user)
//   } else {
//     // No user is signed in.
//     console.log('no user')
//   }
// });
// var auth = firebase.auth();
// auth.useEmulator("http://localhost:9099");

// var db = firebase.firestore();
// if (window.location.hostname === "localhost") {
//   db.useEmulator("localhost", 8080);
// }

ReactDOM.render(
  <React.StrictMode>
    <Firebase firebase={firebase}>
      <App />
    </Firebase>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
