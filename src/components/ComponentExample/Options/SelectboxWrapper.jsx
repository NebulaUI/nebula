import React from 'react'
import T from 'prop-types'
import { BareList } from 'nebula-react'

import { getDeepObjectValue } from 'utils'

const SelectboxWrapper = ({ stateKey, state, handleChange, label, children }) => (
  <BareList.Item>
    { label }
    <div>
      <select
        data-stateKey={stateKey}
        onChange={handleChange}
        value={getDeepObjectValue(state, stateKey)}
      >
        { children }
      </select>
    </div>
  </BareList.Item>
)

SelectboxWrapper.propTypes = {
  stateKey: T.string.isRequired,
  state: T.shape({}).isRequired,
  handleChange: T.func.isRequired,
  children: T.node.isRequired,
  label: T.string.isRequired
}

export default SelectboxWrapper
