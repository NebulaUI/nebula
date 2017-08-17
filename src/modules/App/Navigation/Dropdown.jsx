import React from 'react'
import T from 'prop-types'
import { Navbar, Icon } from 'nebula-react'
import classNames from 'classnames'

const Dropdown = ({ renderRoutes, to, icon, label, descendants, path }) => (
  <Navbar.Dropdown.Wrapper key={to}>
    <Navbar.Dropdown.Toggle
      className={classNames({ 'is-active': path.includes(to) })}
    >
      { icon && (
        <Icon left icon={icon} />
      )}
      { label }
    </Navbar.Dropdown.Toggle>
    <Navbar.Dropdown.Content>
      { renderRoutes(descendants) }
    </Navbar.Dropdown.Content>
  </Navbar.Dropdown.Wrapper>
)

Dropdown.propTypes = {
  renderRoutes: T.func.isRequired,
  to: T.string.isRequired,
  label: T.string.isRequired,
  path: T.string.isRequired,
  descendants: T.arrayOf(T.shape({})).isRequired,
  icon: T.node
}

export default Dropdown
