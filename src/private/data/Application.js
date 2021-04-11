import FirestoreDoc from './FirestoreDoc'

export default class Application extends FirestoreDoc {
	data = {
		app_name: '',
		tier: 'free'
	}
	COLLECTION = 'applications'

	_getPath = () => {
		return this.db.collection(this.COLLECTION)
	}

	getReferanceById = (id = this.id) => {
		return this._getPath().doc(id)
	}
}