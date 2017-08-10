const splitKeyString = s => Array.isArray(s)
  ? s
  : s.split('.')

const getCurrentValue = (o, k) => o[k[0]]

const removeFirst = a => a.slice(1)

const getDeepObjectValue = (object, keyString) => {
  if (!keyString || !object) {
    return
  }

  const str = splitKeyString(keyString)
  const currentValue = getCurrentValue(object, str)

  return str.length === 1
    ? currentValue
    : getDeepObjectValue(currentValue, removeFirst(str))
}

export default getDeepObjectValue
