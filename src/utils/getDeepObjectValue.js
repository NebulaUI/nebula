const splitKeyString = s => (
  Array.isArray(s)
    ? s
    : s.split('.')
)

const requiredArgs = (ob, ks) => ob && ks
const isLeafSegment = ks => ks.length === 1
const getCurrentValue = (o, k) => o[k[0]]
const removeFirstKey = a => a.slice(1)

const getDeepObjectValue = (object, keyString) => {
  if (!requiredArgs(object, keyString)) {
    return undefined
  }

  const keys = splitKeyString(keyString)
  const currentValue = getCurrentValue(object, keys)

  return isLeafSegment(keys)
    ? currentValue
    : getDeepObjectValue(currentValue, removeFirstKey(keys))
}

export default getDeepObjectValue
