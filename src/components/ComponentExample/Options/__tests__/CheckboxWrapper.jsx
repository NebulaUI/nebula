import React from 'react'
import { shallow } from 'enzyme'
import { Form } from 'nebula-react'
import shortid from 'shortid'

import CheckboxWrapper from '../CheckboxWrapper'

jest.mock('shortid')

beforeEach(() => {
  shortid.mockImplementation(() => 'test-id')
})

const defaultProps = {
  stateKey: 'T',
  state: {},
  handleChange: jest.fn()
}

describe('<CheckboxWrapper/>', () => {
  it('renders <BareList.Item />, <Form.CheckboxWrapper />, <Form.CheckboxInput /> and <Form.CheckboxLabel />', () => {
    const $ = shallow(
      <CheckboxWrapper {...defaultProps}>_</CheckboxWrapper>
    )
    expect($.find(Form.CheckboxWrapper).childAt(0).type()).toBe(Form.CheckboxInput)
    expect($.find(Form.CheckboxWrapper).childAt(1).type()).toBe(Form.CheckboxLabel)
  })

  it('renders children inside <Form.CheckboxLabel />', () => {
    const $ = shallow(
      <CheckboxWrapper {...defaultProps}>
        test
      </CheckboxWrapper>
    )
    expect($.find(Form.CheckboxLabel).contains('test')).toBe(true)
  })

  it('takes a stateKey that is passed as a name prop to <Form.CheckboxInput />', () => {
    const props = {
      ...defaultProps,
      stateKey: 'test'
    }
    const $ = shallow(
      <CheckboxWrapper {...props}>_</CheckboxWrapper>
    )
    expect($.find(Form.CheckboxInput).prop('name')).toBe('test')
  })

  it('handles changes', () => {
    const handleChange = jest.fn()
    const props = {
      ...defaultProps,
      handleChange
    }
    const $ = shallow(
      <CheckboxWrapper {...props}>_</CheckboxWrapper>
    )
    expect(handleChange).not.toBeCalled()

    $.find(Form.CheckboxInput).simulate('change')
    expect(handleChange).toBeCalled()
  })

  it('is checked determined by the state object passed in with corresponding stateKey', () => {
    const state = {
      testKey1: true,
      testKey2: {
        nestedKey: false
      }
    }
    const props = {
      ...defaultProps,
      state
    }
    const $ = shallow(
      <CheckboxWrapper {...props} stateKey="testKey1">_</CheckboxWrapper>
    )
    expect($.find(Form.CheckboxInput).prop('checked')).toBe(true)

    const $$ = shallow(
      <CheckboxWrapper {...props} stateKey="testKey2.nestedKey">_</CheckboxWrapper>
    )
    expect($$.find(Form.CheckboxInput).prop('checked')).toBe(false)
  })

  it('auto generates an ID', () => {
    const $ = shallow(
      <CheckboxWrapper {...defaultProps}>_</CheckboxWrapper>
    )
    expect($.find(Form.CheckboxInput).prop('id')).toBe('test-id')
    expect($.find(Form.CheckboxLabel).prop('htmlFor')).toBe('test-id')
  })
})
