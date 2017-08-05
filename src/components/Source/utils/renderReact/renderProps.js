import { isString, isObject, isArray, isFunction, isDeepTrue } from './generic'

const MAX_ARRAY_LENGTH = 3
const MAX_OBJECT_KEYS = 3

const join = x => `={[${x.slice(0, MAX_ARRAY_LENGTH).join(', ')}`
const arrExceedsLength = x => (x.length > MAX_ARRAY_LENGTH ? ', …' : '')
const extractArrayValues = value => (
  `${join(value)}${arrExceedsLength(value)}]}`
)

const extractObjectKeys = x => Object.keys(x).slice(0, MAX_OBJECT_KEYS)
const outOfBounds = (x, arr) => (x + 1 < arr.length ? ', ' : '')
const objExceedsLength = x => (
  Object.keys(x).length > MAX_OBJECT_KEYS ? ', …' : ''
)

const buildObjectStringValue = (value) => {
  const reducer = (objectString, key, i, arr) =>
    `${objectString}${key}: '${value[key]}'${outOfBounds(i, arr)}`

  return extractObjectKeys(value).reduce(reducer, '{ ')
}

const extractObjectValues = value =>
  `={${buildObjectStringValue(value)}${objExceedsLength(value)} }}`

const renderPropValue = (value) => {
  if (isDeepTrue(value)) {
    return ''
  }

  if (isString(value)) {
    return `="${value}"`
  }

  if (isArray(value)) {
    return extractArrayValues(value)
  }

  if (isObject(value)) {
    return extractObjectValues(value)
  }

  if (isFunction(value)) {
    return `={${value.name}()}`
  }

  return `={${value}}`
}

const renderProps = (props, defaultProps) => {
  const isDefault = name =>
    name[0] !== '_' && (!defaultProps || props[name] !== defaultProps[name])
  const filteredProps = Object.keys(props).filter(isDefault)
  const buildPropsString = (str, name) =>
    `${str} ${name}${renderPropValue(props[name])}`

  return filteredProps.reduce(buildPropsString, '')
}

export default renderProps
