import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled }) => {

  return (
    <Form.Checkbox
      name="dark-matter"
      {...removeFalsy({ disabled })}
    >
      Dark matter
    </Form.Checkbox>
  )
}

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired
}

export default ComponentToRender
