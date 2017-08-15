import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { getDeepObjectValue } from 'utils'

const SelectboxWrapper = ({ stateKey, state, handleChange, children }) => (
  <Form.Select
    name={stateKey}
    onChange={handleChange}
    value={getDeepObjectValue(state, stateKey)}
  >
    {children}
  </Form.Select>
)

SelectboxWrapper.propTypes = {
  stateKey: T.string.isRequired,
  state: T.shape({}).isRequired,
  handleChange: T.func.isRequired,
  children: T.node.isRequired
}

export default SelectboxWrapper
