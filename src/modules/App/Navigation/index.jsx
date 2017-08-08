import React from 'react'
import T from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'nebula-react'

import routes from './model'

const buildDropdown = ({ to, label, children }) => (
  <Navbar.Dropdown.Wrapper key={to}>
    <Navbar.Dropdown.Toggle>
      {label}
    </Navbar.Dropdown.Toggle>
    <Navbar.Dropdown.Content>
      {
        // eslint-disable-next-line no-use-before-define
        renderRoutes(children)
      }
    </Navbar.Dropdown.Content>
  </Navbar.Dropdown.Wrapper>
)

buildDropdown.propTypes = {
  to: T.string.isRequired,
  label: T.string.isRequired,
  children: T.arrayOf(T.shape({})).isRequired
}

const buildItem = ({ to, label }) => (
  <Navbar.Item key={to}>
    <NavLink
      className="c-navbar__link"
      activeClassName="is-active"
      to={to}
    >
      { label }
    </NavLink>
  </Navbar.Item>
)

buildItem.propTypes = {
  to: T.string.isRequired,
  label: T.string.isRequired
}

const renderRoute = route => (
  route.children && route.children.length
    ? buildDropdown(route)
    : buildItem(route)
)

const renderRoutes = rs => rs.map(renderRoute)

const Routes = () => (
  <Navbar.Wrapper>
    <Navbar.Inner className="is-sticky">
      <Navbar.Overlay />
      <Navbar.Wrap>
        <Navbar.Toggle.Wrapper>
          <Navbar.Toggle.Bars />
        </Navbar.Toggle.Wrapper>
        <NavLink className="c-navbar__logo" to="/">
          Nebula
        </NavLink>
        <Navbar.Nav>
          {renderRoutes(routes)}
        </Navbar.Nav>
      </Navbar.Wrap>
    </Navbar.Inner>
  </Navbar.Wrapper>
)

export default Routes
