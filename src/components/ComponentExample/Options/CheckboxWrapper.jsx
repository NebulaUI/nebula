import React from 'react'
import T from 'prop-types'
import shortid from 'shortid'
import { BareList, Form } from 'nebula-react'

import { getDeepObjectValue } from 'utils'

const CheckboxWrapper = ({ stateKey, label, node, state, handleChange, children }) => {
  const id = shortid()
  const isChecked = getDeepObjectValue(state, stateKey)
  return (
    <BareList.Item node={node}>
      <Form.CheckboxWrapper>
        <Form.CheckboxInput
          id={id}
          onChange={handleChange}
          data-stateKey={stateKey}
          checked={isChecked}
        />
        <Form.CheckboxLabel htmlFor={id}>
          { children }
        </Form.CheckboxLabel>
      </Form.CheckboxWrapper>
    </BareList.Item>
  )
}

CheckboxWrapper.propTypes = {
  stateKey: T.string.isRequired,
  node: T.string,
  state: T.shape({}).isRequired,
  handleChange: T.func.isRequired,
  children: T.node.isRequired
}

export default CheckboxWrapper
