import React, { Component } from 'react'
import T from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Navbar } from 'nebula-react'

import Item from './Item'
import Dropdown from './Dropdown'

const renderRoutes = (rs, path) => rs.map(route => (
  route.descendants && route.descendants.length
    ? Dropdown({ path, renderRoutes, ...route })
    : Item(route)
))

class Routes extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.toggle.props.handleToggle()
    }
  }

  render() {
    const { routes, location: { pathname } } = this.props
    return (
      <Navbar.Wrapper sticky>
        <Navbar.Overlay />
        <Navbar.Inner>
          <Navbar.Toggle.Wrapper ref={(node) => { this.toggle = node }}>
            <Navbar.Toggle.Bars />
          </Navbar.Toggle.Wrapper>
          <NavLink className="c-navbar__logo" to="/nebula">
            Nebula
          </NavLink>
          <Navbar.Content>
            {renderRoutes(routes, pathname)}
          </Navbar.Content>
          <Navbar.Content right node="div" keepAtTop>
            <Navbar.Item node="div" resetLineHeight>
              <NavLink
                activeStyle={{ display: 'none' }}
                to="/nebula/get-started"
                className="c-btn c-btn--sm c-btn--alpha"
              >
                Get started!
              </NavLink>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar.Inner>
      </Navbar.Wrapper>
    )
  }
}

Routes.propTypes = {
  routes: T.arrayOf(T.shape({
    descendants: T.arrayOf(T.shape({}))
  })).isRequired,
  location: T.shape({
    pathname: T.string.isRequired
  }).isRequired
}

export default withRouter(Routes)
