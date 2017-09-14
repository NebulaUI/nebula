import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled, small, individualComponents, submitPosition }) => (
  individualComponents
    ? (
      <Form.SearchWrapper
        submitPosition={submitPosition}
        {...removeFalsy({ small })}
      >
        <Form.SearchInput {...removeFalsy({ disabled })} />
        <Form.SearchSubmit {...removeFalsy({ disabled })} />
      </Form.SearchWrapper>
    )
    : (
      <Form.Search
        submitPosition={submitPosition}
        required
        label="Search form"
        {...removeFalsy({ disabled })}
        {...removeFalsy({ small })}
      />
    )
)

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  small: T.bool.isRequired,
  submitPosition: T.string.isRequired,
  individualComponents: T.bool.isRequired
}

export default ComponentToRender
