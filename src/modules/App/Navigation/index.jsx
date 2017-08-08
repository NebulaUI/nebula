import React, { Component } from 'react'
import T from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
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

class Routes extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.toggle.props.handleToggle()
    }
  }

  render() {
    return (
      <Navbar.Wrapper sticky>
        <Navbar.Overlay />
        <Navbar.Inner>
          <Navbar.Toggle.Wrapper ref={(node) => this.toggle = node}>
            <Navbar.Toggle.Bars />
          </Navbar.Toggle.Wrapper>
          <NavLink className="c-navbar__logo" to="/">
            Nebula
          </NavLink>
          <Navbar.Nav>
            {renderRoutes(routes)}
          </Navbar.Nav>
        </Navbar.Inner>
      </Navbar.Wrapper>
    )
  }
}

export default withRouter(Routes)
