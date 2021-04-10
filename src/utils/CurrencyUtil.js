export default class CurrencyUtil {
  static getSymbole = (curr) => {
    return currancy_symbols[curr.toLowerCase()] || '$'
  }
}


const currancy_symbols={
  'usd':'$'
}