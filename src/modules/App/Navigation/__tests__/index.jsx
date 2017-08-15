import React from 'react'
import { shallow, mount } from 'enzyme'
import { NavLink } from 'react-router-dom'
import { MemoryRouter } from 'react-router'
import { Navbar } from 'nebula-react'

import { basePath } from 'utils/constants'
import { Navigation } from '../'

const defaultProps = {
  routes: [{
    to: '/',
    label: 'T'
  }],
  location: {
    pathname: '/'
  }
}

describe('<Navigation />', () => {
  it('renders <Navbar.Wapper /> with sticky', () => {
    const $ = shallow(<Navigation {...defaultProps} />)
    expect($.find(Navbar.Wrapper).prop('sticky')).toBe(true)
  })

  it('renders <Navbar.Overlay />', () => {
    const $ = shallow(<Navigation {...defaultProps} />)
    expect($.find(Navbar.Wrapper).childAt(0).type()).toBe(Navbar.Overlay)
  })

  it('renders <Navbar.Inner />', () => {
    const $ = shallow(<Navigation {...defaultProps} />)
    expect($.find(Navbar.Wrapper).childAt(1).type()).toBe(Navbar.Inner)
  })

  it('renders <Navbar.Toggle.Wrapper /> and <Navbar.Toggle.Bars />', () => {
    const $ = shallow(<Navigation {...defaultProps} />)
    expect($.find(Navbar.Inner).childAt(0).type()).toBe(Navbar.Toggle.Wrapper)
    expect($.find(Navbar.Toggle.Wrapper).childAt(0).type()).toBe(Navbar.Toggle.Bars)
  })

  it('renders the logo as <NavLink />', () => {
    const $ = shallow(<Navigation {...defaultProps} />)
    const getNavLink = $.find(Navbar.Inner).childAt(1)
    expect(getNavLink.type()).toBe(NavLink)
    expect(getNavLink.prop('className')).toBe('c-navbar__logo')
    expect(getNavLink.prop('to')).toBe(basePath)
  })

  it('renders <Navbar.Content> containing the routes', () => {
    const props = {
      ...defaultProps,
      routes: [
        { to: '/test', label: 'route1' },
        {
          to: '/',
          label: 'route2',
          descendants: [{ to: '/test', label: 'test-descendant' }]
        }
      ]
    }
    const $ = shallow(<Navigation {...props} />)
    const getContent = $.find(Navbar.Inner).childAt(2)
    expect(getContent.type()).toBe(Navbar.Content)
    expect(getContent.childAt(0).type()).toBe(Navbar.Item)
    expect(getContent.childAt(0).find(Navbar.Link).prop('to')).toBe('/test')
    expect(getContent.childAt(0).find(Navbar.Link).contains('route1')).toBe(true)
    expect(getContent.childAt(1).type()).toBe(Navbar.Dropdown.Wrapper)
  })

  it('renders <Navbar.Content> aligned to the right containing secondary Content', () => {
    const $ = shallow(<Navigation {...defaultProps} />)
    const getContent = $.find(Navbar.Inner).childAt(3)
    expect(getContent.type()).toBe(Navbar.Content)
    expect(getContent.prop('right')).toBe(true)
    expect(getContent.prop('keepAtTop')).toBe(true)
    expect(getContent.prop('node')).toBe('div')
  })

  it('when the location changes the navbar Closes (mobile)', () => {
    const CompWrappedWithMemoryRouter = props => (
      <MemoryRouter>
        <Navigation {...props} />
      </MemoryRouter>
    )
    const $ = mount(<CompWrappedWithMemoryRouter {...defaultProps} />)
    expect($.find(Navigation).html()).toMatch('c-navbar')
    expect($.find(Navigation).html()).not.toMatch('c-navbar is-open')

    $.setProps({
      location: {
        pathname: 'change'
      }
    })

    expect($.html()).toMatch('c-navbar is-open')

    $.setProps({
      location: {
        pathname: 'change-again'
      }
    })

    expect($.html()).not.toMatch('c-navbar is-open')

    $.setProps({
      location: {
        pathname: 'change-again'
      }
    })

    expect($.html()).not.toMatch('c-navbar is-open')
  })
})
