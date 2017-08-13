import React from 'react'
import T from 'prop-types'
import { BareList } from 'nebula-react'

import Section from './Section'

const Options = ({ handleChange, optionState, model }) => {
  const handleCheckboxChange = ({ target }) =>
    handleChange(target.getAttribute('data-stateKey'), target.checked)

  const handleSelectboxChange = ({ target }) => {
    handleChange(target.getAttribute('data-stateKey'), target.value)
  }

  const renderSection = section => (
    <Section
      key={section.title}
      optionState={optionState}
      section={section}
      handleCheckboxChange={handleCheckboxChange}
      handleSelectboxChange={handleSelectboxChange}
    />
  )

  return (
    <BareList.Wrapper spacing="md">
      {model.map(renderSection)}
    </BareList.Wrapper>
  )
}

Options.propTypes = {
  model: T.arrayOf(T.shape({
    title: T.string.isRequired
  })).isRequired,
  handleChange: T.func.isRequired,
  optionState: T.shape({}).isRequired
}

export default Options
