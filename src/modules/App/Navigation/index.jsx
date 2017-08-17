import React, { Component } from 'react'
import T from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Navbar, Icon } from 'nebula-react'

import githubIcon from 'assets/icons/github.svg'

import { basePath } from 'utils/constants'
import renderRoutes from './renderRoutes'
import SecondaryContent from './SecondaryContent'


class Navigation extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.close.props.close()
    }
  }

  render() {
    const { routes, location: { pathname } } = this.props
    return (
      <Navbar.Wrapper sticky>
        <Navbar.Overlay ref={(node) => { this.close = node }} />
        <Navbar.Inner>
          <Navbar.Toggle.Wrapper>
            <Navbar.Toggle.Bars />
          </Navbar.Toggle.Wrapper>
          <NavLink className="c-navbar__logo" to={basePath}>
            Nebula
          </NavLink>
          <Navbar.Content>
            {renderRoutes(routes, pathname)}
          </Navbar.Content>
          <Navbar.Content right node="div" keepAtTop>
            { SecondaryContent }
          </Navbar.Content>
          <Navbar.Content right node="div">
            <Navbar.Item node="div" resetLineHeight>
              <a
                href="https://github.com/rbrtsmith/nebula"
                className="c-btn c-btn--sm c-btn--beta"
              >
                <Icon icon={githubIcon} verticalAlign="sub" width="22px" height="22px" />
                <span style={{ marginLeft: '0.5rem' }}>Repo</span>
              </a>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar.Inner>
      </Navbar.Wrapper>
    )
  }
}

Navigation.propTypes = {
  routes: T.arrayOf(T.shape({
    descendants: T.arrayOf(T.shape({}))
  })).isRequired,
  location: T.shape({
    pathname: T.string.isRequired
  }).isRequired
}

export { Navigation }

export default withRouter(Navigation)
