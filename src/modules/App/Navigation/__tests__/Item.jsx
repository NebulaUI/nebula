import React from 'react'
import { shallow } from 'enzyme'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'nebula-react'

import Item from '../Item'

const defaultProps = {
  to: 'T',
  label: 'T'
}

describe('<Item />', () => {
  it('renders <NavBar.item /> and <Navbar.Link />', () => {
    const $ = shallow(<Item {...defaultProps} />)
    expect($.find(Navbar.Item).childAt(0).type()).toBe(Navbar.Link)
  })

  it('overrides the default link with RR <NavLink />', () => {
    const $ = shallow(<Item {...defaultProps} />)
    expect($.find(Navbar.Link).prop('component')).toBe(NavLink)
  })

  it('takes a "to" prop passing it to <Navbar.Link />', () => {
    const props = {
      ...defaultProps,
      to: '/test-path'
    }
    const $ = shallow(<Item {...props} />)
    expect($.find(Navbar.Link).prop('to')).toBe('/test-path')
  })

  it('takes a "label" rendering it as a child to <Navbar.Link />', () => {
    const props = {
      ...defaultProps,
      label: 'test-label'
    }
    const $ = shallow(<Item {...props} />)
    expect($.find(Navbar.Link).contains('test-label')).toBe(true)
  })
})
