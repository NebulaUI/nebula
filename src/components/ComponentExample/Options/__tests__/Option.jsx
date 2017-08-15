import React from 'react'
import { shallow } from 'enzyme'

import Option from '../Option'

import CheckboxWrapper from '../CheckboxWrapper'
import SelectboxWrapper from '../SelectboxWrapper'
import RadioWrapper from '../RadioWrapper'

const defaultProps = {
  stateKey: 'T',
  type: 'T',
  label: 'T',
  state: {},
  handleCheckboxChange: jest.fn(),
  handleSelectboxChange: jest.fn(),
  handleRadioChange: jest.fn()
}

describe('<Option />', () => {
  it('renders <CheckboxWrapper /> if option type is a checkbox', () => {
    const handleCheckboxChange = jest.fn()
    const props = {
      ...defaultProps,
      type: 'checkbox',
      handleCheckboxChange
    }
    const $ = shallow(<Option {...props} />)
    expect($.find(SelectboxWrapper)).toHaveLength(0)
    expect($.find(RadioWrapper)).toHaveLength(0)
    expect($.find(CheckboxWrapper).prop('handleChange')).toBe(handleCheckboxChange)
  })

  it('renders <SelectboxWrapper /> if option type is a select', () => {
    const selectOptions = [{
      label: 'Select Option Label',
      value: 'test option'
    }]
    const handleSelectboxChange = jest.fn()
    const props = {
      ...defaultProps,
      type: 'select',
      handleSelectboxChange,
      options: selectOptions
    }
    const $ = shallow(<Option {...props} />)
    expect($.find(CheckboxWrapper)).toHaveLength(0)
    expect($.find(RadioWrapper)).toHaveLength(0)
    expect($.find(SelectboxWrapper).prop('handleChange')).toBe(handleSelectboxChange)
    expect($.find('option').prop('value')).toEqual(selectOptions[0].value)
  })

  it('renders <RadioWrapper /> if option type is a radiio', () => {
    const radioOptions = [{
      label: 'Radio Option Label',
      value: 'test option'
    }]
    const handleRadioChange = jest.fn()
    const props = {
      ...defaultProps,
      type: 'radio',
      handleRadioChange,
      options: radioOptions
    }
    const $ = shallow(<Option {...props} />)
    expect($.find(CheckboxWrapper)).toHaveLength(0)
    expect($.find(SelectboxWrapper)).toHaveLength(0)
    expect($.find(RadioWrapper).prop('handleChange')).toBe(handleRadioChange)
    expect($.find(RadioWrapper).prop('value')).toEqual(radioOptions[0].value)
  })

  it('returns "null if option type is not found', () => {
    const props = {
      ...defaultProps,
      type: 'not-found'
    }
    const $ = shallow(<Option {...props} />)
    expect($.type()).toBe(null)
  })
})
