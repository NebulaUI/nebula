import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'nebula-react'

import { BASE_PATH } from 'constants/index'

const SecondayContent = (
  <Navbar.Item tag="div" resetLineHeight className="u-push-left-md">
    <NavLink
      activeStyle={{ display: 'none' }}
      to={`${BASE_PATH}get-started`}
      className="c-btn c-btn--sm c-btn--alpha"
    >
      <span role="img" aria-label="star" style={{ color: 'transparent', textShadow: '0 0 0 white', marginRight: '0.5rem' }}>💫</span>Get started!
    </NavLink>
  </Navbar.Item>
)

export default SecondayContent
