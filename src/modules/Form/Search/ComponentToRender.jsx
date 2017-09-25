import React from 'react'
import T from 'prop-types'
import { Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({
  disabled,
  small,
  submitPosition,
  label,
  decompose
}) => {
  const buildIndividualComponents = () => (
    label ? (
      <form>
        <Form.Label htmlFor="search">Search Form</Form.Label>
        <Form.SearchWrapper tag="div" submitPosition={submitPosition}>
          <Form.SearchInput
            id="search"
            {...removeFalsy({ small })}
            {...removeFalsy({ disabled })}
          />
          <Form.SearchSubmit {...removeFalsy({ disabled })} />
        </Form.SearchWrapper>
      </form>
    ) : (
      <Form.SearchWrapper submitPosition={submitPosition}>
        <Form.SearchInput {...removeFalsy({ disabled })} {...removeFalsy({ small })} />
        <Form.SearchSubmit {...removeFalsy({ disabled })} />
      </Form.SearchWrapper>
    )
  )
  return decompose
  ? buildIndividualComponents()
  : (
    <Form.Search
      submitPosition={submitPosition}
      required
      {...removeFalsy({ disabled })}
      {...removeFalsy({ small })}
    >
      { label ? 'Search Form' : '' }
    </Form.Search>
  )
}


ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  small: T.bool.isRequired,
  submitPosition: T.string.isRequired,
  individualComponents: T.bool.isRequired,
  label: T.bool.isRequired,
  decompose: T.bool.isRequired
}

export default ComponentToRender
