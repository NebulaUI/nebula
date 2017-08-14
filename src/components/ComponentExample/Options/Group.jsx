import React from 'react'
import T from 'prop-types'
import { BareList } from 'nebula-react'

import CheckboxWrapper from './CheckboxWrapper'
import SelectboxWrapper from './SelectboxWrapper'

const Group = ({ group, state, handleCheckboxChange, handleSelectboxChange }) => {
  const renderOption = ({ stateKey, type, label, options }) => {
    const optionProps = {
      key: stateKey,
      stateKey,
      state,
      label,
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
          {options.map(
            selectOption =>
              <option key={selectOption.label} value={selectOption.value}>
                { selectOption.label }
              </option>
          )}
        </SelectboxWrapper>
      )
    }

    return null
  }

  return (
    <BareList.Item>
      <h2>{ group.title }</h2>
      <BareList.Wrapper spacing="md" className="u-flush-bottom">
        { group.options.map(renderOption) }
      </BareList.Wrapper>
    </BareList.Item>
  )
}

Group.propTypes = {
  group: T.shape({
    title: T.string.isRequired,
    options: T.arrayOf(
      T.shape({
        stateKey: T.string.isRequired,
        label: T.string.isRequired,
        type: T.string.isRequired,
        options: T.arrayOf(
          T.shape({}).isRequired
        ),
      }).isRequired,
    ).isRequired
  }),
  state: T.shape({}).isRequired,
  handleCheckboxChange: T.func.isRequired,
  handleSelectboxChange: T.func.isRequired
}

export default Group
