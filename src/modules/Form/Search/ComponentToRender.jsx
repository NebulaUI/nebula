import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled, small }) => (
  <Form.Search
    submitPosition="right"
    required
    label="Search form"
    {...removeFalsy({ disabled })}
    {...removeFalsy({ small })}
  />
)

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  small: T.bool
}

export default ComponentToRender
