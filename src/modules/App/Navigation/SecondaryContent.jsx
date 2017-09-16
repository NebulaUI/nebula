import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'nebula-react'

import { BASE_PATH } from 'constants/index'

const SecondayContent = (
  <Navbar.Item tag="div" resetLineHeight>
    <NavLink
      activeStyle={{ display: 'none' }}
      to={`${BASE_PATH}get-started`}
      className="c-btn c-btn--sm c-btn--alpha u-push-left-md"
    >
      <span role="img" aria-label="star" style={{ color: 'transparent', textShadow: '0 0 0 white', marginRight: '0.5rem' }}>💫</span>Get started!
    </NavLink>
  </Navbar.Item>
)

export default SecondayContent
