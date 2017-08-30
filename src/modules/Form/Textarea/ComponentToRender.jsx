import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled }) => (
  <div>
    <Form.Label htmlFor="comments">Comments:</Form.Label>
    <Form.Textarea
      id="comments"
      placeholder="I'd like to suggest..."
      {...removeFalsy({ disabled })}
    />
  </div>
)

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
}

export default ComponentToRender
