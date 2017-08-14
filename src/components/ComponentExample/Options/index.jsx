import React from 'react'
import T from 'prop-types'
import { BareList } from 'nebula-react'

import Group from './Group'

const Options = ({ handleChange, state, model }) => {
  const handleCheckboxChange = ({ target }) =>
    handleChange(target.getAttribute('data-stateKey'), target.checked)

  const handleSelectboxChange = ({ target }) => {
    handleChange(target.getAttribute('data-stateKey'), target.value)
  }

  const renderGroup = group => (
    <Group
      key={group.title}
      state={state}
      group={group}
      handleCheckboxChange={handleCheckboxChange}
      handleSelectboxChange={handleSelectboxChange}
    />
  )

  return (
    <BareList.Wrapper spacing="md">
      { model.map(renderGroup) }
    </BareList.Wrapper>
  )
}

Options.propTypes = {
  model: T.arrayOf(T.shape({
    title: T.string.isRequired
  })).isRequired,
  handleChange: T.func.isRequired,
  state: T.shape({}).isRequired
}

export default Options
