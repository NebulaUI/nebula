const MAX_ARRAY_LENGTH = 3
const MAX_OBJECT_KEYS = 3

const renderPropValue = (value) => {
  if (typeof value === 'boolean' && value) {
    return ''
  }

  if (typeof value === 'string') {
    return `="${value}"`
  }

  if (Array.isArray(value)) {
    let arrayDisplay = `={[${value.slice(0, MAX_ARRAY_LENGTH).join(', ')}`
    if (value.length > MAX_ARRAY_LENGTH) arrayDisplay += ', ...'
    arrayDisplay += ']}'

    return arrayDisplay
  }

  if (typeof value === 'function') {
    return `={${value.name ? `${value.name}()` : 'anonymous()'}}`
  }

  if (typeof value === 'object') {
    let objectDisplay = Object.keys(value).slice(0, MAX_OBJECT_KEYS)

    objectDisplay = objectDisplay.reduce(
      (objectString, key, index) => {
        let propString = `${key}: '${value[key]}'`
        if (index + 1 < objectDisplay.length) {
          propString += ', '
        }
        return `${objectString}${propString}`
      },
      '{ ',
    )

    if (Object.keys(value).length > MAX_OBJECT_KEYS) {
      objectDisplay += ', ...'
    }

    return `={${objectDisplay} }}`
  }

  return `={${value}}`
}

const renderProps = (props, defaultProps) => {
  const names = Object.keys(props).filter(
    name =>
    name[0] !== '_' &&
    (!defaultProps || props[name] !== defaultProps[name]),
  )

  return names.reduce((propString, name) =>
      `${propString} ${name}${renderPropValue(props[name])}`,
    '',
  )
}

export default renderProps
