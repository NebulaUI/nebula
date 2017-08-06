import { getKeys } from '../generic'

const buildFilteredProps = (props, keys) => {
  const buildProps = (acc, key) => {
    acc[key] = props[key]
    return acc
  }
  return keys.reduce(buildProps, {})
}

const notPrivate = k => k[0] !== '_'
const notDefault = (k, ks, defaultProps) =>
  (!getKeys(defaultProps) || ks[k] === defaultProps[k])

const getFilteredKeys = (props, defaultProps) => {
  const predicate = (key, i, keys) =>
    notPrivate(key) && notDefault(key, keys, defaultProps)
    return getKeys(props).filter(predicate)
}

const filterDefaultProps = (props, defaultProps) =>
  buildFilteredProps(props, getFilteredKeys(props, defaultProps))

export default filterDefaultProps
