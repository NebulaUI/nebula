import React from 'react'
import T from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Navbar, Icon } from 'nebula-react'

const Item = ({ to, label, icon }) => (
  <Navbar.Item key={to}>
    <Navbar.Link
      component={NavLink}
      activeClassName="is-active"
      to={to}
    >
      { icon && (
        <Icon verticalAlign="sub" width="24px" height="24px" left icon={icon} />
      )}
      { label }
    </Navbar.Link>
  </Navbar.Item>
)

Item.propTypes = {
  to: T.string.isRequired,
  label: T.string.isRequired,
  icon: T.node
}

export default Item
