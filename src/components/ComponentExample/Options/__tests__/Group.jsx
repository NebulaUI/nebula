import React from 'react'
import { shallow } from 'enzyme'
import { BareList } from 'nebula-react'

import Group from '../Group'

import CheckboxWrapper from '../CheckboxWrapper'
import SelectboxWrapper from '../SelectboxWrapper'

const defaultOption = {
  stateKey: 'T',
  label: 'T',
  type: 'T'
}

const defaultGroup = {
  title: 'T',
  options: [ defaultOption]
}

const defaultProps = {
  group: defaultGroup,
  state: {},
  handleCheckboxChange: jest.fn(),
  handleSelectboxChange: jest.fn()
}

describe('<Group />', () => {
  it('renders the title', () => {
    const props = {
      ...defaultProps,
      group: {
        ...defaultGroup,
        title: 'Test title'
      }
    }
    const $ = shallow(<Group {...props} />)
    expect($.contains('Test title')).toBe(true)
  })

  it('renders <BareList />', () => {
    const $ = shallow(<Group {...defaultProps} />)
    expect($.find(BareList.Item).find(BareList.Wrapper)).toHaveLength(1)
  })

  it('renders <CheckboxWrapper /> if an option type is a checkbox', () => {
    const handleCheckboxChange = jest.fn()
    const props = {
      ...defaultProps,
      group: {
        ...defaultGroup,
        options: [{
          ...defaultOption,
          type: 'checkbox'
        }]
      },
      handleCheckboxChange
    }
    const $ = shallow(<Group {...props} />)
    expect($.find(SelectboxWrapper)).toHaveLength(0)
    expect($.find(CheckboxWrapper).prop('handleChange')).toBe(handleCheckboxChange)
  })

  it('renders <SelectboxWrapper /> if an option type is a select', () => {
    const selectOptions = [{
      label: 'Select Option Label',
      value: 'test option'
    }]
    const handleSelectboxChange = jest.fn()
    const props = {
      ...defaultProps,
      group: {
        ...defaultGroup,
        options: [{
          ...defaultOption,
          type: 'select',
          options: selectOptions
        }]
      },
      handleSelectboxChange
    }
    const $ = shallow(<Group {...props} />)
    expect($.find(CheckboxWrapper)).toHaveLength(0)
    expect($.find(SelectboxWrapper).prop('handleChange')).toBe(handleSelectboxChange)
    expect($.find('option').prop('value')).toEqual(selectOptions[0].value)
  })
})