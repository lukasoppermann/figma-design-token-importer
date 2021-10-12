const flattenTokens = (object: object, parent = null, res = {}, separator: string = '.') => {
  for (let key in object) {
    // create name
    let propName = parent ? `${parent}${separator}${key}` : key
    // if value is object continue
    // console.log(propName, 'keys: ', object[key], 'value' in object[key])
    if (typeof object[key] === 'object' && ('value' in object[key]) === false) {
      flattenTokens(object[key], propName, res)
      // return
    } else {
      res[propName] = object[key]
    }
  }
  return res
}

export default flattenTokens

// original
// const flattenObject = (object: object, parent = null, res = {}, separator: string = ' / ') => {
//   for (let key in object) {
//     // create name
//     let propName = parent ? `${parent}${separator}${key}` : key
//     // if value is object continue
//     if (typeof object[key] === 'object' && object[key].constructor === Object) {
//       flattenObject(object[key], propName, res)
//       // return
//     } else {
//       res[propName] = object[key]
//     }
//   }
//   return res;
// }