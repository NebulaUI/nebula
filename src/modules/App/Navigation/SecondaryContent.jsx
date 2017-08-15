import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'nebula-react'

import { basePath } from 'utils/constants'

const SecondayContent = (
  <Navbar.Item node="div" resetLineHeight>
    <NavLink
      activeStyle={{ display: 'none' }}
      to={`${basePath}get-started`}
      className="c-btn c-btn--sm c-btn--alpha"
    >
      Get started!
    </NavLink>
  </Navbar.Item>
)

export default SecondayContent
