import React from 'react'
import T from 'prop-types'

import { getDeepObjectValue } from 'utils'

const SelectboxWrapper = ({ stateKey, state, handleChange, children }) => (
  <select
    name={stateKey}
    onChange={handleChange}
    value={getDeepObjectValue(state, stateKey)}
  >
    { children }
  </select>
)

SelectboxWrapper.propTypes = {
  stateKey: T.string.isRequired,
  state: T.shape({}).isRequired,
  handleChange: T.func.isRequired,
  children: T.node.isRequired
}

export default SelectboxWrapper
