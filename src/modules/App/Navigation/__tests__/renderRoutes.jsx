import React from 'react'
import { shallow } from 'enzyme'
import { Navbar } from 'nebula-react'

import renderRoutes from '../renderRoutes'

describe('renderRoutes', () => {
  it('renders <Navbar.Dropdown.Wrapper /> if the route has descendants', () => {
    const routes = [{
      label: 'T',
      to: '/',
      descendants: [{
        to: '/T',
        label: 'T'
      }]
    }]
    const $ = shallow(
      <div>
        { renderRoutes(routes, '/')}
      </div>
    )
    expect($.childAt(0).type()).toBe(Navbar.Dropdown.Wrapper)
  })

  it('renders <Navbar.Item /> if the route has no descendants', () => {
    const routes = [{
      label: 'T',
      to: '/'
    }]
    const $ = shallow(
      <div>
        { renderRoutes(routes, '/')}
      </div>
    )
    expect($.childAt(0).type()).toBe(Navbar.Item)
  })
})
