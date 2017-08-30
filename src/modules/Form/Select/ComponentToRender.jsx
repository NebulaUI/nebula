import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled, small }) => (
  <div>
    <Form.Label htmlFor="country">Select Country</Form.Label>
    <Form.Select
      id="country"
      {...removeFalsy({ disabled })}
      {...removeFalsy({ small })}
    >
      <option value="Germany">Germany</option>
      <option value="United Kingdom">United Kingdom</option>
      <option disabled value="France">France</option>
    </Form.Select>
  </div>
)

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  small: T.bool.isRequired
}

export default ComponentToRender
