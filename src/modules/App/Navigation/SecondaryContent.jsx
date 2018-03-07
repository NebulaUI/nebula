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
      <img src={`/src/assets/icons/nebula-icon.svg`} alt='Nebula' style={{ marginRight: '0.7rem', width: '20px', height: 'auto', verticalAlign: 'middle' }} />
      <span style={{ verticalAlign: 'middle' }}>Get started!</span>
    </NavLink>
  </Navbar.Item>
)

export default SecondayContent
