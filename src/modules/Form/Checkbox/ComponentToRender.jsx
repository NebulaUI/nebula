import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled }) => (
  <div>
    <Form.Checkbox
      name="dark-matter"
      defaultChecked
      {...removeFalsy({ disabled })}
    >
      Dark Matter
    </Form.Checkbox>
    <Form.Checkbox
      name="black-hole"
      {...removeFalsy({ disabled })}
    >
      Black Hole
    </Form.Checkbox>
  </div>
)

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired
}

export default ComponentToRender
