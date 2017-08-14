import React from 'react'
import T from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'nebula-react'

const Item = ({ to, label }) => (
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

Item.propTypes = {
  to: T.string.isRequired,
  label: T.string.isRequired
}

export default Item
