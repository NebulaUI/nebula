import React from 'react'
import T from 'prop-types'
import { BareList } from 'nebula-react'

import CheckboxWrapper from './CheckboxWrapper'
import SelectboxWrapper from './SelectboxWrapper'
import SelectOption from './SelectOption'

const Section = ({ section, optionState, handleCheckboxChange, handleSelectboxChange }) => {
  const renderOption = (option) => {
    if (option.type === 'checkbox') {
      return (
        <CheckboxWrapper
          key={option.stateKey}
          stateKey={option.stateKey}
          optionState={optionState}
          handleChange={handleCheckboxChange}
        >
          {option.label}
        </CheckboxWrapper>
      )
    }

    if (option.type === 'select') {
      return (
        <SelectboxWrapper
          key={option.stateKey}
          label={option.label}
          stateKey={option.stateKey}
          optionState={optionState}
          handleChange={handleSelectboxChange}
        >
          {option.options.map(
            selectOption =>
              <SelectOption key={selectOption.label} option={selectOption} />
          )}
        </SelectboxWrapper>
      )
    }

    return null
  }

  return (
    <BareList.Item>
      <h2>{section.title}</h2>
      <BareList.Wrapper spacing="md" className="u-flush-bottom">
        {section.options.map(renderOption)}
      </BareList.Wrapper>
    </BareList.Item>
  )
}

Section.propTypes = {
  section: T.shape({
    title: T.string.isRequired,
    options: T.arrayOf(
      T.shape({
        stateKey: T.string.isRequired,
        label: T.string.isRequired
      }).isRequired,
    ).isRequired
  }),
  optionState: T.shape({}).isRequired,
  handleCheckboxChange: T.func.isRequired,
  handleSelectboxChange: T.func.isRequired
}

export default Section
