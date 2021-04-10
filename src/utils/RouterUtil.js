export default class RouterUtil {
  static parsePath = (path) => {
    const getParent=(arr)=>{
      if(arr.length > 1){return arr[arr.length - 2]}
      return arr[0]
    }
    const arr = path.split('/').map(x => `/${x}`)
    const obj = {
      root: arr[0],
      parent: getParent(arr),
      ...arr,
    }
    return obj
  }
}