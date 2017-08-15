import React from 'react'
import { shallow } from 'enzyme'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'nebula-react'

import SecondaryContent from '../SecondaryContent'

describe('<SecondaryContent />', () => {
  it('renders <Navbar.Item />', () => {
    const $ = shallow(<div>{ SecondaryContent }</div>)
    expect($.find(Navbar.Item).prop('resetLineHeight')).toBe(true)
    expect($.find(Navbar.Item).prop('node')).toBe('div')
  })

  it('renders <NavLink />', () => {
    const $ = shallow(<div>{ SecondaryContent }</div>)
    expect($.find(Navbar.Item).childAt(0).type()).toBe(NavLink)
    expect($.find(NavLink).prop('activeStyle')).toEqual({ display: 'none' })
    expect($.find(NavLink).prop('to')).toBe('/nebula/get-started')
    expect($.find(NavLink).prop('className')).toBe('c-btn c-btn--sm c-btn--alpha')
    expect($.find(NavLink).contains('Get started!')).toBe(true)
  })
})
