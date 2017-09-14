import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled, small, individualComponents, submitPosition, label }) => {
  const buildIndividualComponents = () => (
    label ? (
      <div>
        <Form.Label htmlFor="search">Search form</Form.Label>
        <Form.SearchWrapper submitPosition={submitPosition}>
          <Form.SearchInput
            id="search"
            {...removeFalsy({ small })}
            {...removeFalsy({ disabled })}
          />
          <Form.SearchSubmit {...removeFalsy({ disabled })} />
        </Form.SearchWrapper>
      </div>
    ) : (
      <Form.SearchWrapper submitPosition={submitPosition}>
        <Form.SearchInput {...removeFalsy({ disabled })} {...removeFalsy({ small })} />
        <Form.SearchSubmit {...removeFalsy({ disabled })} />
      </Form.SearchWrapper>
    )
  )
  return individualComponents
  ? buildIndividualComponents()
  : (
    <Form.Search
      submitPosition={submitPosition}
      required
      {...removeFalsy({ label: label ? 'Search form' : false })}
      {...removeFalsy({ disabled })}
      {...removeFalsy({ small })}
    />
  )
}


ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  small: T.bool.isRequired,
  submitPosition: T.string.isRequired,
  individualComponents: T.bool.isRequired,
  label: T.bool.isRequired
}

export default ComponentToRender
