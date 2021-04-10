// subcollection
import InitFirebase from "../../InitFirebase";
const firebase = InitFirebase('Charge.js')

export default class Charge{
  data={} // what goes in the db
  /**
   * Create a Charge instance to be used when a user makes a payment
   * @param {*} line_items an array of Application instances. Usally of langth 1.
   */
  constructor(line_items){
    this.data.line_items = line_items // array of app referaces 
    this.data.timestamp = firebase.firestore.FieldValue.serverTimestamp()
  }
}