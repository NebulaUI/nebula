import React from 'react'
import T from 'prop-types'
import { BareList, MatrixList } from 'nebula-react'

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
      <BareList.Item node={optionProps.node}>
        <CheckboxWrapper
          handleChange={handleCheckboxChange}
          {...optionProps}
        >
          { label }
        </CheckboxWrapper>
      </BareList.Item>
    )
  }

  if (type === 'select') {
    return (
      <BareList.Item>
        <div>
          { optionProps.label }
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
      </BareList.Item>
    )
  }

  if (type === 'radio') {
    return (
      <BareList.Item>
        <strong>{label}</strong>
        <MatrixList.Wrapper spacing="md">
          {options.map(radioOption => (
            <MatrixList.Item node={radioOption.node} key={radioOption.value}>
              <RadioWrapper
                handleChange={handleRadioChange}
                value={radioOption.value}
                {...optionProps}
              >
                {radioOption.label}
              </RadioWrapper>
            </MatrixList.Item>
          ))}
        </MatrixList.Wrapper>
      </BareList.Item>
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
