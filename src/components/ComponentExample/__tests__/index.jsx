import React from 'react'
import { shallow } from 'enzyme'
import 'components/Source/utils/highlight'

import ComponentExample, {
  ComponentDescription,
  ComponentRendered,
  ComponentOptions
} from '../'

import Source from '../../Source'

jest.mock('components/Source/utils/highlight', () => {})

describe('<ComponentExample />', () => {
  it('renders <Source /> passing the example component as children', () => {
    const props = {
      config: {
        type: 'Flag',
        extraString: 'Test extra string',
        componentNameOverride: { Foo: 'baz' }
      }
    }
    const $ = shallow(
      <ComponentExample {...props}>
        <ComponentDescription>_</ComponentDescription>
        <ComponentOptions>_</ComponentOptions>
        <ComponentRendered>
          <div>Test</div>
        </ComponentRendered>
      </ComponentExample>
    )
    expect($.find(Source).contains('Test')).toBe(true)
    expect($.find(Source).prop('description').type).toEqual(ComponentDescription)
    expect($.find(Source).prop('options').type).toEqual(ComponentOptions)
    expect($.find(Source).prop('type')).toBe('Flag')
    expect($.find(Source).prop('extraString')).toBe('Test extra string')
    expect($.find(Source).prop('componentNameOverride')).toEqual({ Foo: 'baz' })
  })

  it('renders style props', () => {
    const props = {
      config: {
        type: 'T',
        style: { position: 'relative' }
      }
    }
    const $ = shallow(
      <ComponentExample {...props}>
        <ComponentRendered>
          _
        </ComponentRendered>
      </ComponentExample>
    )
    expect($.prop('style')).toEqual({ position: 'relative' })
  })
})

describe('<ComponentDescription />', () => {
  it('renders children', () => {
    const $ = shallow(<ComponentDescription>test</ComponentDescription>)
    expect($.contains('test')).toBe(true)
  })
})

describe('<ComponentOptions />', () => {
  it('renders children', () => {
    const $ = shallow(<ComponentOptions>test</ComponentOptions>)
    expect($.contains('test')).toBe(true)
  })
})

describe('<ComponentRendered />', () => {
  it('renders children', () => {
    const $ = shallow(<ComponentRendered>test</ComponentRendered>)
    expect($.contains('test')).toBe(true)
  })
})
