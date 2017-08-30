import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled, small, type }) => (
  <div>
    <Form.Label htmlFor="name">Name:</Form.Label>
    <Form.TextInput
      id="name"
      placeholder="John Smith"
      {...removeFalsy({ type: type === 'text' ? false : type })}
      {...removeFalsy({ disabled })}
      {...removeFalsy({ small })}
    />
  </div>
)

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  small: T.bool,
  type: T.string
}

export default ComponentToRender
