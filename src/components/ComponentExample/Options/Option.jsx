import React from 'react'
import T from 'prop-types'

import CheckboxWrapper from './CheckboxWrapper'
import SelectboxWrapper from './SelectboxWrapper'

const Option = ({
  stateKey,
  type,
  label,
  options,
  handleCheckboxChange,
  handleSelectboxChange,
  ...rest
}) => {
  const optionProps = {
    key: stateKey,
    stateKey,
    label,
    ...rest
  }
  if (type === 'checkbox') {
    return (
      <CheckboxWrapper
        handleChange={handleCheckboxChange}
        {...optionProps}
      >
        { label }
      </CheckboxWrapper>
    )
  }

  if (type === 'select') {
    return (
      <SelectboxWrapper
        handleChange={handleSelectboxChange}
        {...optionProps}
      >
        {options.map(selectOption => (
          <option key={selectOption.label} value={selectOption.value}>
            { selectOption.label }
          </option>
        ))}
      </SelectboxWrapper>
    )
  }

  return null
}

Option.propTypes = {
  stateKey: T.string.isRequired,
  label: T.string.isRequired,
  type: T.string.isRequired,
  options: T.arrayOf(T.shape({})),
  handleCheckboxChange: T.func.isRequired,
  handleSelectboxChange: T.func.isRequired
}

export default Option
