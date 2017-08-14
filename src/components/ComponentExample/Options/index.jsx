import React from 'react'
import T from 'prop-types'
import { BareList } from 'nebula-react'

import Group from './Group'

const Options = ({ handleChange, model, ...rest }) => {
  const handleCheckboxChange = ({ target }) =>
    handleChange(target.getAttribute('data-stateKey'), target.checked)

  const handleSelectboxChange = ({ target }) => {
    handleChange(target.getAttribute('data-stateKey'), target.value)
  }

  const renderGroup = group => (
    <Group
      key={group.title}
      handleCheckboxChange={handleCheckboxChange}
      handleSelectboxChange={handleSelectboxChange}
      {...group}
      {...rest}
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
  handleChange: T.func.isRequired
}

export default Options
