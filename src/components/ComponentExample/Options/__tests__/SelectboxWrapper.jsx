import React from 'react'
import { shallow } from 'enzyme'
import { Form } from 'nebula-react'

import SelectboxWrapper from '../SelectboxWrapper'

const defaultProps = {
  stateKey: 'T',
  state: {},
  handleChange: jest.fn()
}

describe('<SelectboxWrapper />', () => {
  it('renders Form.Select with appropriate props', () => {
    const props = {
      ...defaultProps,
      state: {
        test: 'test-value'
      },
      stateKey: 'test'
    }
    const $ = shallow(<SelectboxWrapper {...props}>_</SelectboxWrapper>)
    expect($.type()).toBe(Form.Select)
    expect($.prop('name')).toBe('test')
    expect($.prop('value')).toBe('test-value')
  })

  it('renders children', () => {
    const $ = shallow(<SelectboxWrapper {...defaultProps}>test child</SelectboxWrapper>)
    expect($.contains('test child')).toBe(true)
  })

  it('handles change events', () => {
    const mockFn = jest.fn()
    const props = {
      ...defaultProps,
      handleChange: mockFn
    }
    const $ = shallow(<SelectboxWrapper {...props}>_</SelectboxWrapper>)
    expect(mockFn).not.toHaveBeenCalled()

    $.simulate('change')
    expect(mockFn).toHaveBeenCalled()
  })
})
