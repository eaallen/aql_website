import React from 'react'
import User from '../../private/data/User'

export const FirebaseContext = React.createContext()

export default class Firebase extends React.Component {
    constructor(props) {
        super(props)
        this.firebase = this.props.firebase
        this.db = this.firebase.firestore()
        this.actions = {
            googleAuth: this.googleAuth
        }
        this.state = {
        }

        this.googleProvider = new this.firebase.auth.GoogleAuthProvider();
        // TODO: set up firebase auth UI
        // this.ui = new firebaseui.auth.AuthUI(firebase.auth())


    }
    // ------------------------------------ Firebase Methods --------------------------------------

    // auth
    googleAuth = async () => {
        console.log('starting g auth')
        this.firebase.auth()
            .signInWithPopup(this.googleProvider)
            .then(async result => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var data = result.user;
                console.log('user:', data, token)
                await User.genUserDataOrCreate(data)
                console.log(User)
            }).catch((error) => {
                // Handle Errors here.
                // The email of the user's account used.
                // The firebase.auth.AuthCredential type that was used.
                console.error(error)
                User.setStatusAuthentication(false)
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