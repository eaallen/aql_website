import React from 'react'
import ApplicationsCollection from '../../private/data/collection/ApplicationsCollection'
import User from '../../private/data/User'

export const FirebaseContext = React.createContext()

export default class Firebase extends React.Component {
	constructor(props) {
		super(props)
		this.firebase = this.props.firebase
		this.db = this.firebase.firestore()
		this.auth = this.firebase.auth()
		this.user = null // no user info yet
		this.actions = {
			googleAuth: this.googleAuth,
			setApplications: this.setApplications,
			setFirebaseCtxState: this.setState,
			signOut: this.signOut,
			createUserWithEmailAndPassword: this.createUserWithEmailAndPassword,
			signInWithEmailAndPassword: this.signInWithEmailAndPassword
		}
		this.state = {
			apps: null, // arr of apps for sell
			component_mounted: false,
			mounted: false,
		}
		this.googleProvider = new this.firebase.auth.GoogleAuthProvider();
		// TODO: set up firebase auth UI
		// this.ui = new firebaseui.auth.AuthUI(firebase.auth())

		this.applicationsCollection = new ApplicationsCollection()
	}
	// ------------------------------------ Firebase Methods --------------------------------------

	// auth
	googleAuth = async () => {
		this.auth.signOut().then(() => {
			this.auth.signInWithPopup(this.googleProvider)
				.then(async result => {
					/** @type {firebase.auth.OAuthCredential} */
					// var credential = result.credential;
					// This gives you a Google Access Token. You can use it to access the Google API.
					// var token = credential.accessToken;
					// The signed-in user info.
					// var data = result.user;
					// await User.genUserDataOrCreate(data)
				}).catch((error) => {
					// Handle Errors here.
					// The email of the user's account used.
					// The firebase.auth.AuthCredential type that was used.
					console.error(error)
					// User.setStatusAuthentication(false)
				});
		}).catch(e => console.error(e))
	}

	// email and password
	createUserWithEmailAndPassword = async (email, password) => {
		try {
			await this.auth.createUserWithEmailAndPassword(email, password)
		} catch (error) {
			return error.message
		}
	}
	signInWithEmailAndPassword = async (email, password) => {
		try {
			await this.auth.signInWithEmailAndPassword(email, password)
		} catch (error) {
			return 'Did not authenticate'
		}
	}



	signOut = () => {
		console.log('sign out')
		this.auth.signOut()
	}

	// firestore

	// user methods

	// ------------------------------------- Context Buisness ------------------------------------
	setApplications = (data) => {
		this.setState({ apps: data })
	}

	// ------------------------------------- Render Method ----------------------------------------
	componentDidCatch() { }
	componentDidMount = async () => {
		this.auth.onAuthStateChanged((user) => {
			if (user) {
				// user is signed in.
				this.setState({ authenticated: true, user: new User(user) })
			} else {
				// No user is signed in.
				this.setState({ authenticated: false, user: null })
			}
			this.setState({ mounted: true })
		});

	}
	render() {
		if (!this.state.mounted) {
			return <></>
		}
		return (
			<FirebaseContext.Provider value={{ ...this.state, ...this.actions }}>
				{this.props.children}
			</FirebaseContext.Provider>)
	}

}