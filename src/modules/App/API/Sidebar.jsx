import React from 'react'
import { NavLink } from 'react-router-dom'
import { BareList } from 'nebula-react'

import navigationModel from './navigationModel'

const buildNavItems = item => (
  <BareList.Item key={item.to}>
    <NavLink to={item.to}>
      { item.label }
    </NavLink>
    { item.descendants && (
      <BareList.Wrapper style={{ fontWeight: 'normal', marginBottom: '1rem' }}>
        { item.descendants.map(buildNavItems) }
      </BareList.Wrapper>
    )}
  </BareList.Item>
)

const Sidebar = () => (
  <div style={{ padding: '0 1rem' }}>
    <h2>API</h2>
    <BareList.Wrapper style={{ fontWeight: 'bold' }}>
      { navigationModel.map(buildNavItems)}
    </BareList.Wrapper>
  </div>
)

export default Sidebar
