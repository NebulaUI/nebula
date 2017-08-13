import React from 'react'
import T from 'prop-types'

const SelectOption = ({ option }) => (
  <option value={option.value}>
    {option.label}
  </option>
)

SelectOption.propTypes = {
  option: T.shape({
    value: T.string.isRequired,
    label: T.string.isRequired
  }).isRequired
}

export default SelectOption
