import FirestoreDoc from './FirestoreDoc'

class User extends FirestoreDoc {
	data = {
		applications: [],
		groups: [],
	}
	account = {}
	status = {
		authenticated: false
	}
	COLLECTION = 'users'

	/**
	 * handle sub collections 
	 * @param {object} data data from snap shot
	 * @returns data from snapshot
	 */
	_proccessUserInfo = async data => {
		// handle application refs
		console.log('user _proccessSnapshotData', data)
		for (const app of data.applications) {
			// use promise.all here instead of awaiting every one
			app.application = await app.application.get()
			app.application = app.application.data()
		}

		// handle group refs 
		// for(const group of data.groups){
		// // hanlde group reff here
		// }
		return data
	}

	genUserDataOrCreate = async (data) => {
		this.account = data
		this.id = this.account.uid
		this.status.authenticated = true
		const user_info = await this.genFromID(data.uid)
		if (user_info) {
			//set user data
			this.data = await this._proccessUserInfo(user_info)
		} else if (this.status.authenticated) {
			// create new user doc in db
			this.genSave(data.uid)
		}
	}

	setStatusAuthentication = bool => {
		this.status.authenticated = bool
	}

	// save user to firebase db
	genSave = async id => {
		console.log('ID---->', id)
		this.db.collection(this.COLLECTION).doc(id).set(this.data).then((docRef) => {
			console.log("Document written with ID: ", docRef);
		}).catch((error) => {
			console.error("Error adding document: ", error);
		});
		return this
	}

	// change the users data
	mutate = () => {

	}

	// delete the user
	delete = () => { }

	/**
	 * gets the charges path / collections ref
	 * @returns {FirestoreSubCollection} the subcollection holding all of the charges
	 * for the user
	 */
	_getChargesPath = () => {
		return this.db
			.collection(this.COLLECTION)
			.doc(this.id)
			.collection('charges')
	}

	/**
	 * gets the charges for a user
	 * @returns 
	 */
	asyncGetCharges = async () => {
		// get charges
		const charge_ref = await this._getChargesPath().get()
		const charges = charge_ref.data()
		console.log(charges)
		// for (const line of charges.line_items) {
		//     // use promise.all here instead of awaiting every one
		//     // charges.line_items = await line.get()
		//     // charges.line_items = line.data()
		// }
		return
	}

	/**
	 * create a charge for the user. Should also call a cloud functons method
	 * @param {*} data (new Charge().data)  
	 * @returns 
	 */
	asyncCreateCharge = async (data) => {
		this._getChargesPath().doc().set(data)
			.then(() => {
				// handle stripe maybe
				return
			})
			.catch(err => {
				console.error('err while createting charge', err)
			})
		return
	}

	// ------------------------ Testing and Debuging -----------------------------
	test = () => {
		console.log(this.db)
	}
}

// export a user object that is used in authentication needs 
export default new User();