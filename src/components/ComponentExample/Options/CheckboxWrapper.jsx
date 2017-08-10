import React from 'react'
import T from 'prop-types'
import shortid from 'shortid'
import { BareList } from 'nebula-react'

import { getDeepObjectValue } from 'utils'

const CheckboxWrapper = ({ stateKey, node, optionState, handleChange, children }) => {
  const id = shortid()
  const isChecked = getDeepObjectValue(optionState, stateKey)
  return (
    <BareList.Item node={node}>
      <input
        type="checkbox"
        id={id}
        onChange={handleChange}
        data-stateKey={stateKey}
        checked={isChecked}
      />
      <label htmlFor={id}>{ children }</label>
    </BareList.Item>
  )
}

CheckboxWrapper.propTypes = {
  stateKey: T.string.isRequired,
  node: T.string,
  optionState: T.shape({}).isRequired,
  handleChange: T.func.isRequired,
  children: T.node.isRequired
}

export default CheckboxWrapper
