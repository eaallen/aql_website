export default class RouterUtil {
  static parsePath = (path = window.location.pathname) => {
    const getParent = (arr) => {
      if (arr.length > 1) { return arr[arr.length - 2] }
      return arr[0]
    }
    console.log(path)
    const arr = path.split('/').map(x => `/${x}`)
    const obj = {
      root: arr[0],
      parent: getParent(arr),
      current: arr[arr.length - 1],
      ...arr,
    }
    return obj
  }
}