import InitFirebase from "../../InitFirebase";
const firebase = InitFirebase('FirestoreDoc.js')
export default class FirestoreDoc {
	data = {}
	COLLECTION = ''
	id = ''
	constructor() {
		// initalize firebase 
		this.db = firebase.firestore()
	}




	/**
	 * Gets data form Firestore in Async manner. Override _proccessSnapshotData
	 * to cusotmize data before returning it. 
	 * @param {Firestore_ID} id used for a spesific doc in Firestore
	 * @returns Firestore doc data or null if ID does not exist
	 */
	genFromID = async (id) => {
		try {
			const user_ref = this.db.collection(this.COLLECTION).doc(id)
			const snapshot = await user_ref.get()
			if (snapshot.exists) {
				this.id = id
				return snapshot.data()
			}
			return null
		} catch (e) {
			console.error(`error geting doc ${id} from the ${this.COLLECTION} collection:`, e)
			return null
		}
	}

	firestoreConvert = () => {
		return {
			toFirestore(obj = this) {
				return obj.data
			},
			fromFirestore(snapshot, options) {
				const data = snapshot.data(options);
				return new this(data.name, data.state, data.country);
			}
		}

	}

}