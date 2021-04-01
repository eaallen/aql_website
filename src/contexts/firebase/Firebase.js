import React from 'react'
import firebase from "firebase/app";
import { FIREBASE_CONFIG } from "../../private/firebase";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// import {firebaseui} from 'firebaseui';


export const FirebaseContext = React.createContext()

export default class Firebase extends React.Component {
    constructor(props) {
        super(props)
        // from https://stackoverflow.com/questions/43331011/firebase-app-named-default-already-exists-app-duplicate-app
       
        this.actions = {
            googleAuth: this.googleAuth
        }
        this.state = {
        }
    
        if (!firebase.apps.length) {
            firebase.initializeApp(FIREBASE_CONFIG);
        } else {
            firebase.app(); // if already initialized, use that one
        }

        this.googleProvider = new firebase.auth.GoogleAuthProvider();
        // TODO: set up firebase auth UI
        // this.ui = new firebaseui.auth.AuthUI(firebase.auth())


    }
    // ------------------------------------ Firebase Methods --------------------------------------

    // auth
    googleAuth = () => {
        console.log('starting g auth')
        firebase.auth()
            .signInWithPopup(this.googleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log('user:',user, token)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // The email of the user's account used.
                // The firebase.auth.AuthCredential type that was used.
                console.error(error)
            });
    }

    // firestore

    // user methods

    // ------------------------------------- Render Method ----------------------------------------
    componentDidCatch() { }
    componentDidMount() {
        // connect to database 
    }
    render() {
        return (
            <FirebaseContext.Provider value={{ ...this.state, ...this.actions }}>
                {this.props.children}
            </FirebaseContext.Provider>)
    }

}