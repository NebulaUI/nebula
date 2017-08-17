import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'nebula-react'

import { basePath } from 'utils/constants'

const SecondayContent = (
  <Navbar.Item node="div" resetLineHeight>
    <NavLink
      activeStyle={{ display: 'none' }}
      to={`${basePath}get-started`}
      className="c-btn c-btn--sm c-btn--alpha u-push-left-md"
    >
      <span style={{ color: 'transparent', textShadow: '0 0 0 white', marginRight: '0.5rem' }}>💫</span>Get started!
    </NavLink>
  </Navbar.Item>
)

export default SecondayContent
