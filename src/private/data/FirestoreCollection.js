export default class FirestoreCollection {
	/**
	 * get data from the provided firestore object. does not handle referances 
	 * @param {string} collection_id the ID used to sotre data as a collection 
	 * @param {firestore obj} db 
	 * @returns array of firestore documents (collection)
	 */
	static genDataFromCollection = async (collection_id, db) => {
		const query = await db.collection(collection_id).get()
		const arr = []
		query.forEach(doc=>{ 
			arr.push({id:doc.id, ...doc.data()})
		})

		return arr
	}
}