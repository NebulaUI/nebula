import React from 'react'
import { shallow } from 'enzyme'
import highlight from 'components/Source/utils/highlight'

import Example from '../Example'
import ComponentExample, {
  ComponentDescription,
  ComponentRendered,
  ComponentOptions
} from '../'
import Options from '../Options'

jest.mock('components/Source/utils/highlight', () => {})

const ComponentToRender = <div />
const Description = () => <div />

const defaultProps = {
  title: 'T',
  ComponentToRender,
  Description,
  options: {
    model: [],
    handleChange: jest.fn(),
    state: {}
  },
  config: {
    type: 'T'
  }
}

describe('<Example />', () => {
  it('renders the title', () => {
    const props = {
      ...defaultProps,
      title: 'test-title'
    }
    const $ = shallow(<Example {...props} />)
    expect($.find('h1').contains('test-title')).toBe(true)
  })

  it('renders <ComponentExample /> with appropriate props and children', () => {
    const props = {
      ...defaultProps,
      config: { type: 'test-type' }
    }
    const $ = shallow(<Example {...props} />)
    expect($.find(ComponentExample).prop('config')).toEqual({ type: 'test-type' })
    expect($.find(ComponentExample).childAt(0).type()).toBe(ComponentDescription)
    expect($.find(ComponentExample).childAt(1).type()).toBe(ComponentOptions)
    expect($.find(ComponentExample).childAt(2).type()).toBe(ComponentRendered)
  })
})
