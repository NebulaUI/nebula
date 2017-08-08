import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'nebula-react'

const Routes = () => (
  <Navbar.Wrapper>
    <Navbar.Overlay />
    <Navbar.Inner>
      <Navbar.Toggle.Wrapper>
        <Navbar.Toggle.Bars />
      </Navbar.Toggle.Wrapper>
      <Navbar.Logo to="/">
        Nebula
      </Navbar.Logo>
      <Navbar.Nav>
        <Navbar.Item>
          <NavLink exact className="c-navbar__link" activeClassName="is-active" to="/">Home</NavLink>
        </Navbar.Item>
        <Navbar.Item>
          <NavLink className="c-navbar__link" activeClassName="is-active" to="/objects/bare-list">BareList</NavLink>
        </Navbar.Item>
        <Navbar.Item>
          <NavLink className="c-navbar__link" activeClassName="is-active" to="/objects/flag">Flag</NavLink>
        </Navbar.Item>
        <Navbar.Item>
          <NavLink className="c-navbar__link" activeClassName="is-active" to="/components/navbar">Navbar</NavLink>
        </Navbar.Item>
      </Navbar.Nav>
    </Navbar.Inner>
  </Navbar.Wrapper>
)

export default Routes
