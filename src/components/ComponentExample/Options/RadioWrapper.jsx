import React from 'react'
import T from 'prop-types'
import shortid from 'shortid'
import { Form } from 'nebula-react'

import { getDeepObjectValue } from 'utils'

const RadioWrapper = ({ stateKey, value, state, handleChange, children }) => {
  const id = shortid()
  const isChecked = getDeepObjectValue(state, stateKey) === value
  return (
    <Form.RadioWrapper>
      <Form.RadioInput
        name={stateKey}
        id={id}
        onChange={handleChange}
        value={value}
        checked={isChecked}
      />
      <Form.RadioLabel htmlFor={id}>
        { children }
      </Form.RadioLabel>
    </Form.RadioWrapper>
  )
}

RadioWrapper.propTypes = {
  stateKey: T.string.isRequired,
  state: T.shape({}).isRequired,
  handleChange: T.func.isRequired,
  children: T.node.isRequired,
  value: T.string.isRequired
}

export default RadioWrapper
