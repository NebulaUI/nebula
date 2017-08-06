import { isString, isObject, isArray, isFunction, isDeepTrue, getKeys } from '../generic'
import filterDefaultProps from './filterDefaultProps'

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
  getKeys(x).length > MAX_OBJECT_KEYS ? ', …' : ''
)

const buildObjectStringValue = (value) => {
  const buildStringValue = (string, key, i, arr) =>
    `${string}${key}: '${value[key]}'${outOfBounds(i, arr)}`

  return extractObjectKeys(value).reduce(buildStringValue, '{ ')
}

const extractObjectValues = value =>
  `={${buildObjectStringValue(value)}${objExceedsLength(value)} }}`

const buildPropValue = (value) => {
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

const buildPropsString = (props) =>  {
  const buildString = (str, propKey) =>
    `${str} ${propKey}${buildPropValue(props[propKey])}`

  return getKeys(props).reduce(buildString, '')
}

const renderProps = (props, defaultProps) =>
  buildPropsString(filterDefaultProps(props, defaultProps))

export default renderProps
