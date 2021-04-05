import firebase from "firebase/app";
import { FIREBASE_CONFIG } from './private/firebase'

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";


export default function InitFirebase(path = '[ UNKNOWN ]') {
    // from https://stackoverflow.com/questions/43331011/firebase-app-named-default-already-exists-app-duplicate-app
    if (!firebase.apps.length) {
        console.info('Initalized Firebase App at: ' + path)
        firebase.initializeApp(FIREBASE_CONFIG);
    } else {
        firebase.app(); // if already initialized, use that one
    }
    return firebase
}
