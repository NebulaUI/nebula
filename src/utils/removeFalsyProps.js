const propIsObject = (o, k) => o[k] && typeof o[k] === 'object'
const propIsTruthy = (o, k) => o[k]

const removeFalsyProps = (object) => {
  const buildNewObject = (newObject, key) => {
    if (propIsObject(object, key)) {
      newObject[key] = removeFalsyProps(object[key])
      return newObject
    }

    if (propIsTruthy(object, key)) {
      newObject[key] = object[key]
      return newObject
    }

    return newObject
  }

  return Object.keys(object).reduce(buildNewObject, {})
}

export default removeFalsyProps
