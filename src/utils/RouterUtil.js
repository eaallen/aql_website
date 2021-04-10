export default class RouterUtil {
  static parsePath = (path) => {
    console.log('parsePath', path)
    const getParent=(arr)=>{
      if(arr.length > 1){return arr[arr.length - 2]}
      return null
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