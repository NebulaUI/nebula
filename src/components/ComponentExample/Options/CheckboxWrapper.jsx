import React from 'react'
import T from 'prop-types'
import shortid from 'shortid'
import { Form } from 'nebula-react'

import { getDeepObjectValue } from 'utils'

const CheckboxWrapper = ({ stateKey, state, handleChange, children }) => {
  const id = shortid()
  const isChecked = getDeepObjectValue(state, stateKey)
  return (
    <Form.CheckboxWrapper>
      <Form.CheckboxInput
        id={id}
        onChange={handleChange}
        name={stateKey}
        checked={isChecked}
      />
      <Form.CheckboxLabel htmlFor={id}>
        { children }
      </Form.CheckboxLabel>
    </Form.CheckboxWrapper>
  )
}

CheckboxWrapper.propTypes = {
  stateKey: T.string.isRequired,
  state: T.shape({}).isRequired,
  handleChange: T.func.isRequired,
  children: T.node.isRequired
}

export default CheckboxWrapper
