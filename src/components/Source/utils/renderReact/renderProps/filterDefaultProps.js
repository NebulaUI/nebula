import { getKeys } from '../generic'

const filter = (props, keys) => keys.reduce((acc, key) => {
  acc[key] = props[key]
  return acc
}, {})

const notPrivate = k => k[0] !== '_'
const notDefault = (k, ks, defaultProps) =>
  (!getKeys(defaultProps) || ks[k] === defaultProps[k])

const filterDefaultProps = (props, defaultProps) => {
  const predicate = (propKey, i, propKeys) =>
    notPrivate(propKey) && notDefault(propKey, propKeys, defaultProps)

  const filteredKeys = getKeys(props).filter(predicate)

  return filter(props, filteredKeys)
}

export default filterDefaultProps
