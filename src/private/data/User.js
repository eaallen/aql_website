import FirestoreDoc from './FirestoreDoc'

class User extends FirestoreDoc {
	constructor(user_data) {
		super()
		// if user is authenticated, we can continue set up
		if (user_data) {
			this.account = user_data
			this.data = { applications: [], groups: [] }
			this.COLLECTION = 'users'

			this._asyncUserDataOrCreate(this.account)
		}
	}

	/**
	 * handle sub collections 
	 * @param {object} data data from snap shot
	 * @returns data from snapshot
	 */
	_proccessUserInfo = async data => {
		// handle application refs
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

	_asyncUserDataOrCreate = async (data) => {
		const user_info = await this.genFromID(data.uid)

		// is the user info sotred in our db?
		if (user_info) {
			//set user data
			this.data = await this._proccessUserInfo(user_info)
		} else if (data) {
			// create new user doc in db
			this.asyncSave(data.uid)
		}
		return
	}

	setStatusAuthentication = bool => {
		this.status.authenticated = bool
	}

	// save user to firebase db
	asyncSave = async id => {
		this.db.collection(this.COLLECTION).doc(id).set(this.data).then((docRef) => {
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
			.doc(this.account.uid)
			.collection('charges')
	}

	/**
	 * gets the charges for a user NOT READY FOR USE
	 * @returns 
	 */
	asyncGetCharges = async () => {
		// get charges
		const charge_snapshot = await this._getChargesPath().get()
		const arr_charges = []

		charge_snapshot.forEach(x => {
			arr_charges.push({ id: x.id, ...x.data() })
		})

		// should be using promise.all but im to tired 
		const arr_data = []
		for (const charge of arr_charges) {
			const app = await charge.application.get()
			arr_data.push({
				time: charge.timestamp.toDate(),
				...app.data()
			})
		}


		return arr_data
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
	}
}

// export a user object that is used in authentication needs 
export default User;