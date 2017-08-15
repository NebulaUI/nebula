import React from 'react'
import { shallow } from 'enzyme'
import { Form } from 'nebula-react'
import shortid from 'shortid'

import RadioWrapper from '../RadioWrapper'

jest.mock('shortid')

beforeEach(() => {
  shortid.mockImplementation(() => 'test-id')
})

const defaultProps = {
  stateKey: 'T',
  value: 'T',
  state: {},
  handleChange: jest.fn()
}

describe('<RadioWrapper />', () => {
  it('renders <Form.RadioWrapper', () => {
    const $ = shallow(<RadioWrapper {...defaultProps}>_</RadioWrapper>)
    expect($.type()).toBe(Form.RadioWrapper)
  })

  it('renders <Form.RadioInput />', () => {
    const $ = shallow(<RadioWrapper {...defaultProps}>_</RadioWrapper>)
    expect($.type()).toBe(Form.RadioWrapper)
  })

  it('renders children inside <Form.RadioLabel />', () => {
    const $ = shallow(
      <RadioWrapper {...defaultProps}>test</RadioWrapper>
    )
    expect($.find(Form.RadioLabel).contains('test')).toBe(true)
  })

  it('takes a stateKey that is passed as a name prop to <Form.RadioInput />', () => {
    const props = {
      ...defaultProps,
      stateKey: 'test-key'
    }
    const $ = shallow(
      <RadioWrapper {...props}>_</RadioWrapper>
    )
    expect($.find(Form.RadioInput).prop('name')).toBe('test-key')
  })

  it('handles changes', () => {
    const handleChange = jest.fn()
    const props = {
      ...defaultProps,
      handleChange
    }
    const $ = shallow(
      <RadioWrapper {...props}>_</RadioWrapper>
    )
    expect(handleChange).not.toBeCalled()

    $.find(Form.RadioInput).simulate('change')
    expect(handleChange).toBeCalled()
  })

  it('is checked when the state value equals the value', () => {
    const state = {
      testKey1: 'top',
      testKey2: {
        nestedKey: 'bottom'
      }
    }
    const props = {
      ...defaultProps,
      value: 'top',
      state,
    }
    const $ = shallow(
      <RadioWrapper {...props } stateKey="testKey1">_</RadioWrapper>
    )
    expect($.find(Form.RadioInput).prop('checked')).toBe(true)

    const $$ = shallow(
      <RadioWrapper {...props} stateKey="testKey2.nestedKey">_</RadioWrapper>
    )
    expect($$.find(Form.RadioInput).prop('checked')).toBe(false)
  })

  it('auto generates an ID', () => {
    const $ = shallow(
      <RadioWrapper {...defaultProps}>_</RadioWrapper>
    )
    expect($.find(Form.RadioInput).prop('id')).toBe('test-id')
    expect($.find(Form.RadioLabel).prop('htmlFor')).toBe('test-id')
  })
})
