import React, { Component } from 'react'
import T from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Navbar } from 'nebula-react'

import routes from './model'

const buildDropdown = ({ to, label, children, path }) => (
  <Navbar.Dropdown.Wrapper key={to}>
    <Navbar.Dropdown.Toggle className={classNames({ 'is-active': path.includes(to) })}>
      { label }
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
  path: T.string.isRequired,
  children: T.arrayOf(T.shape({})).isRequired
}

const buildItem = ({ to, label }) => (
  <Navbar.Item key={to}>
    <Navbar.Link
      component={NavLink}
      activeClassName="is-active"
      to={to}
    >
      {label}
    </Navbar.Link>
  </Navbar.Item>
)

buildItem.propTypes = {
  to: T.string.isRequired,
  label: T.string.isRequired
}

const renderRoutes = (rs, path) => rs.map(route => (
  route.children && route.children.length
    ? buildDropdown({ ...route, path })
    : buildItem(route)
))

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
          <Navbar.Toggle.Wrapper ref={(node) => { this.toggle = node }}>
            <Navbar.Toggle.Bars />
          </Navbar.Toggle.Wrapper>
          <NavLink className="c-navbar__logo" to="/nebula">
            Nebula
          </NavLink>
          <Navbar.Content>
            {renderRoutes(routes, this.props.location.pathname)}
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
  location: T.shape({
    pathname: T.string.isRequired
  }).isRequired
}

export default withRouter(Routes)
