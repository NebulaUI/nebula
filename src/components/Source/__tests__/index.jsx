import React from 'react'
import { shallow } from 'enzyme'
import { Tabs } from 'nebula-react'

import Source from '../'

const defaultProps = {
  type: 'Flag'
}

describe('<Source />', () => {
  it('renders Tabs', () => {
    const $ = shallow(<Source {...defaultProps}><div /></Source>)
    expect($.find(Tabs.Wrapper)).toHaveLength(1)
    expect($.find(Tabs.Wrapper).childAt(0).type()).toBe(Tabs.TabList)
    expect($.find(Tabs.Wrapper).childAt(1).type()).toBe(Tabs.PanelList)
  })

  it('renders HTML and React code Tabs by default', () => {
    const $ = shallow(<Source {...defaultProps}><div /></Source>)
    expect($.find(Tabs.TabList).contains('HTML code')).toBe(true)
    expect($.find(Tabs.TabList).contains('React code (ES6)')).toBe(true)
  })

  it('renders a description Tab and TabPanel conditionally', () => {
    const $ = shallow(<Source {...defaultProps}><div /></Source>)
    expect($.find(Tabs.TabList).contains('Description')).not.toBe(true)
    expect($.find(Tabs.Panel)).toHaveLength(2)

    const props = {
      ...defaultProps,
      description: 'test-description'
    }
    const $$ = shallow(<Source {...props}><div /></Source>)
    expect($$.find(Tabs.TabList).contains('Description')).toBe(true)
    expect($$.find(Tabs.Panel)).toHaveLength(3)
    expect($$.find(Tabs.PanelList).childAt(0).contains('test-description')).toBe(true)
  })

  it('renders am options Tab and TabPanel conditionally', () => {
    const $ = shallow(<Source {...defaultProps}><div /></Source>)
    expect($.find(Tabs.TabList).contains('Options')).not.toBe(true)
    expect($.find(Tabs.Panel)).toHaveLength(2)

    const props = {
      ...defaultProps,
      options: 'test-options'
    }
    const $$ = shallow(<Source {...props}><div /></Source>)
    expect($$.find(Tabs.TabList).contains('Options')).toBe(true)
    expect($$.find(Tabs.Panel)).toHaveLength(3)
    expect($$.find(Tabs.PanelList).childAt(0).contains('test-options')).toBe(true)
  })

  it('renders HTML code', () => {
    const $ = shallow(<Source {...defaultProps}><div /></Source>)
    expect($.find(Tabs.PanelList).childAt(0).contains('<div></div>')).toBe(true)
  })

  it('renders React code', () => {
    const $ = shallow(<Source {...defaultProps}><div /></Source>)
    expect($.find(Tabs.PanelList).childAt(1).contains('<div />')).toBe(true)
  })
})