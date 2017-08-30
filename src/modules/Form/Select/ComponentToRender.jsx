import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled }) => (
  <div>
    <Form.Label htmlFor="country">Select Country</Form.Label>
    <Form.Select
      id="country"
      {...removeFalsy({ disabled })}
      onChange={() => {}}
    >
      <option value="Germany">Germany</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="France">France</option>
    </Form.Select>
  </div>
)

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired
}

export default ComponentToRender
