const isString = x => typeof x === 'string'
const isObject = x => typeof x === 'object'
const isNumber = x => typeof x === 'number'
const isFunction = x => typeof x === 'function'
const isArray = x => Array.isArray(x)
const isDeepTrue = x => x === true
const isText = x => isString(x) || isNumber(x)
const getKeys = obj => obj && Object.keys(obj)

export {
  isString,
  isObject,
  isNumber,
  isArray,
  isFunction,
  isDeepTrue,
  isText,
  getKeys
}
