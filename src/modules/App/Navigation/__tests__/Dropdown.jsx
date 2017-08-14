import React from 'react'
import { shallow } from 'enzyme'
import { Navbar } from 'nebula-react'

import Dropdown from '../Dropdown'
import Item from '../Item'

const defaultProps = {
  renderRoutes: d => <Item to={d[0].to} label={d[0].label} />,
  to: '/T',
  label: 'T',
  path: 'T',
  descendants: [{ to: '/', label: 'T' }]
}

describe('<Dropdown />', () => {
  it('renders <Navbar.Dropdown.Wrapper />', () => {
    const $ = shallow(
      <Dropdown {...defaultProps} />
    )
    expect($.find(Navbar.Dropdown.Wrapper)).toHaveLength(1)
  })

  describe('<Navbar.Dropdown.Toggle />', () => {
    it('has an active class when one of the descendants is the active route', () => {
      const props = {
        ...defaultProps,
        to: '/test',
        path: '/test/hello'
      }
      const $ = shallow(
        <Dropdown {...props} />
      )
      expect($.find(Navbar.Dropdown.Toggle).prop('className')).toBe('is-active')
    })

    it('does not have an active class when one of the descendants is the active route', () => {
      const props = {
        ...defaultProps,
        to: '/not-this-route',
        path: '/test/hello'
      }
      const $ = shallow(
        <Dropdown {...props} />
      )
      expect($.find(Navbar.Dropdown.Toggle).prop('className')).not.toBe('is-active')
    })

    it('renders the label as a child', () => {
      const props = {
        ...defaultProps,
        label: 'test-label'
      }
      const $ = shallow(
        <Dropdown {...props} />
      )
      expect($.find(Navbar.Dropdown.Toggle).contains('test-label')).toBe(true)
    })
  })

  it('renders <Navbar.Dropdown.Content />', () => {
    const $ = shallow(
      <Dropdown {...defaultProps} />
    )
    expect($.find(Navbar.Dropdown.Content)).toHaveLength(1)
  })

  it('renders descendants', () => {
    const props = {
      ...defaultProps,
      descendants: [{ to: '/test', label: 'test-label' }]
    }
    const $ = shallow(
      <Dropdown {...props} />
    )
    expect($.find(Navbar.Dropdown.Content).find(Item).prop('to')).toBe('/test')
    expect($.find(Navbar.Dropdown.Content).find(Item).prop('label')).toBe('test-label')
  })
})
