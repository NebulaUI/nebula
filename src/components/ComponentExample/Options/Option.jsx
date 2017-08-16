import React from 'react'
import T from 'prop-types'
import { MatrixList } from 'nebula-react'

import CheckboxWrapper from './CheckboxWrapper'
import SelectboxWrapper from './SelectboxWrapper'
import RadioWrapper from './RadioWrapper'

const Option = ({
  stateKey,
  type,
  label,
  options,
  handleCheckboxChange,
  handleSelectboxChange,
  handleRadioChange,
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
      <div>
        <div>
          <strong>{ optionProps.label }</strong>
        </div>
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
      </div>
    )
  }

  if (type === 'radio') {
    return (
      <div>
        <strong>{ label }</strong>
        <MatrixList.Wrapper spacing="md">
          { options.map(radioOption => (
            <MatrixList.Item node={radioOption.node} key={radioOption.value}>
              <RadioWrapper
                handleChange={handleRadioChange}
                value={radioOption.value}
                {...optionProps}
              >
                { radioOption.label }
              </RadioWrapper>
            </MatrixList.Item>
          )) }
        </MatrixList.Wrapper>
      </div>
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
  handleSelectboxChange: T.func.isRequired,
  handleRadioChange: T.func.isRequired
}

export default Option
