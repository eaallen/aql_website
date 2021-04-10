export default class CurrencyUtil {
  /**
   * matchs a curancey code to a currancy symbol ex: usd->$
   * @param {string} currency 
   * @returns string
   */
  static getSymbol = (currency) => {
    return currancy_symbols[currency.toLowerCase()] || '$'
  }

  /**
   * converts cents to dollars
   * @param {int} cents 
   * @returns int as dollars
   */
  static convertCentToDollar = cents => cents / 100
}


const currancy_symbols = {
  'usd': '$'
}