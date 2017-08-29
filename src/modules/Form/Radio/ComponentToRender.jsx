import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled }) => {

  return (
    <div>
      <Form.Radio
        defaultChecked
        name="speed"
        {...removeFalsy({ disabled })}
      >
        Light speed
      </Form.Radio>
      <Form.Radio
        name="speed"
        {...removeFalsy({ disabled })}
      >
        Super Sonic
      </Form.Radio>
    </div>
  )
}

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired
}

export default ComponentToRender
