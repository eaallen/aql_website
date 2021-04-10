import InitFirebase from "../../../InitFirebase";
const firebase = InitFirebase('FirestoreDoc.js')
export default class Collection {
  constructor() {
    this.db = firebase.firestore()
  }
  //---------------------------- OVERRIDES -------------------------
  COLLECTION = ''
  /**
   * an async function to get data from the applications collection
   * @returns @type {Array<ApplicationDoc>} an array of application docs
   */
  asyncGetData = async () => {
    const query = await this.db.collection(this.COLLECTION).get()
    const arr = []
    query.forEach(doc => (arr.push({ id: doc.id, ...doc.data() })))
    return arr
  }
  asyncGetDataIdKey = async () => {
    const query = await this.db.collection(this.COLLECTION).get()
    const obj = {}
    query.forEach(doc => obj[doc.id] = { ...doc.data() })
    console.log(obj, '<-----')
    return obj
  }


}