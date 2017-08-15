import React from 'react'
import { shallow } from 'enzyme'
import { BareList } from 'nebula-react'

import Options from '../'
import Group from '../Group'

const defaultModel = [{
  title: 'T',
  options: []
}]

const defaultProps = {
  handleChange: jest.fn(),
  state: {},
  model: defaultModel
}

describe('<Options />', () => {
  it('renders <BareList />', () => {
    const $ = shallow(<Options {...defaultProps} />)
    expect($.find(BareList.Wrapper)).toHaveLength(1)
  })

  it('renders <Group /> passing appropriate props', () => {
    const mockHandleChange = jest.fn()
    const name = 'test-name'
    const state = { test: 'it works' }
    const props = {
      ...defaultProps,
      state,
      handleChange: mockHandleChange
    }
    const $ = shallow(<Options {...props} />)
    expect($.find(Group).prop('state')).toEqual(state)

    expect(mockHandleChange).toHaveBeenCalledTimes(0)
    $.find(Group).prop('handleCheckboxChange')({
      target: {
        name,
        checked: true
      }
    })
    expect(mockHandleChange).toHaveBeenCalledWith('test-name', true)

    $.find(Group).prop('handleSelectboxChange')({
      target: {
        name,
        value: 'test-select-value'
      }
    })
    expect(mockHandleChange).toHaveBeenCalledTimes(2)
    expect(mockHandleChange).toHaveBeenCalledWith('test-name', 'test-select-value')

    $.find(Group).prop('handleRadioChange')({
      target: {
        name,
        value: 'test-radio-value'
      }
    })
    expect(mockHandleChange).toHaveBeenCalledTimes(3)
    expect(mockHandleChange).toHaveBeenCalledWith('test-name', 'test-radio-value')
  })
})
