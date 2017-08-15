import React from 'react'
import T from 'prop-types'
import { BareList } from 'nebula-react'

import Group from './Group'

const Options = ({ handleChange, model, ...rest }) => {
  const handleCheckboxChange = ({ target }) =>
    handleChange(target.name, target.checked)

  const handleSelectboxChange = ({ target }) => {
    handleChange(target.name, target.value)
  }

  const handleRadioChange = ({ target }) => {
    handleChange(target.name, target.value)
  }

  const renderGroup = group => (
    <Group
      key={group.title}
      listType={group.listType}
      handleCheckboxChange={handleCheckboxChange}
      handleSelectboxChange={handleSelectboxChange}
      handleRadioChange={handleRadioChange}
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
