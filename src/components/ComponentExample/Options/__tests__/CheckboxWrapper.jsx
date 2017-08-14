import React from 'react'
import { shallow } from 'enzyme'
import { BareList, Form } from 'nebula-react'
import shortid from 'shortid'

import CheckboxWrapper from '../CheckboxWrapper'

jest.mock('shortid')

beforeEach(() => {
  shortid.mockImplementation(() => 'test-id')
})

describe('<CheckboxWrapper/>', () => {
  it('renders <BareList.Item />, <Form.CheckboxWrapper />, <Form.CheckboxInput /> and <Form.CheckboxLabel />', () => {
    const $ = shallow(
      <CheckboxWrapper stateKey="t" state={{}} handleChange={jest.fn()}>
        _
      </CheckboxWrapper>
    )
    expect($.find(BareList.Item)).toHaveLength(1)
    expect($.find(Form.CheckboxWrapper).childAt(0).type()).toBe(Form.CheckboxInput)
    expect($.find(Form.CheckboxWrapper).childAt(1).type()).toBe(Form.CheckboxLabel)
  })

  it('renders children inside <Form.CheckboxLabel />', () => {
    const $ = shallow(
      <CheckboxWrapper stateKey="t" state={{}} handleChange={jest.fn()}>
        test
      </CheckboxWrapper>
    )
    expect($.find(Form.CheckboxLabel).contains('test')).toBe(true)
  })

  it('takes a node to override <BareList.Item /> node type', () => {
    const $ = shallow(
      <CheckboxWrapper node="div" stateKey="t" state={{}} handleChange={jest.fn()}>
        _
      </CheckboxWrapper>
    )
    expect($.find(BareList.Item).prop('node')).toBe('div')
  })

  it('takes a stateKey that is passed as a data-attribute to <Form.CheckboxInput />', () => {
    const $ = shallow(
      <CheckboxWrapper stateKey="test" state={{}} handleChange={jest.fn()}>
        _
      </CheckboxWrapper>
    )
    expect($.find(Form.CheckboxInput).prop('data-stateKey')).toBe('test')
  })

  it('handles changes', () => {
    const handleChange = jest.fn()
    const $ = shallow(
      <CheckboxWrapper stateKey="t" state={{}} handleChange={handleChange}>
        _
      </CheckboxWrapper>
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
    const $ = shallow(
      <CheckboxWrapper stateKey="testKey1" state={state} handleChange={jest.fn()}>
        _
      </CheckboxWrapper>
    )
    expect($.find(Form.CheckboxInput).prop('checked')).toBe(true)

    const $$ = shallow(
      <CheckboxWrapper stateKey="testKey2.nestedKey" state={state} handleChange={jest.fn()}>
        _
      </CheckboxWrapper>
    )
    expect($$.find(Form.CheckboxInput).prop('checked')).toBe(false)
  })

  it('auto generates an ID', () => {
    const $ = shallow(
      <CheckboxWrapper stateKey="t" state={{}} handleChange={jest.fn()}>
        _
      </CheckboxWrapper>
    )
    expect($.find(Form.CheckboxInput).prop('id')).toBe('test-id')
    expect($.find(Form.CheckboxLabel).prop('htmlFor')).toBe('test-id')
  })
})
