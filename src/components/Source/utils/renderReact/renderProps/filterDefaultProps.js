import { getKeys } from '../generic'

const filter = (props, keys) => keys.reduce((acc, key) => {
  acc[key] = props[key]
  return acc
}, {})

const filterDefaultProps = (props, defaultProps) => {
  const filteredKeys = getKeys(props).filter((propKey, i, props) =>
    (propKey[0] !== '_' && (!getKeys(defaultProps) || props[propKey] === defaultProps[propKey]))
  )

  return filter(props, filteredKeys)
}

export default filterDefaultProps
