export default class FirestoreConverter {
  static getConverter = (obj, callback) => {
    return {
      toFirestore(object = obj) {
        return object.data
      },
      fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return callback(data)
      }
    }
  }
}