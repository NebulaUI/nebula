import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'nebula-react'

const ComponentToRender = () => (
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
          <Navbar.Link to="/">
            Spacetime
          </Navbar.Link>
        </Navbar.Item>
        <Navbar.Dropdown.Wrapper>
          <Navbar.Dropdown.Toggle className="is-active">
            Galaxies
          </Navbar.Dropdown.Toggle>
          <Navbar.Dropdown.Content>
            <Navbar.Item>
              <Navbar.Link to="/">
                Milky Way
              </Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
              <Navbar.Link className="is-active" to="/">
                Andromeda
              </Navbar.Link>
            </Navbar.Item>
          </Navbar.Dropdown.Content>
        </Navbar.Dropdown.Wrapper>
        <Navbar.Item>
          <Navbar.Link to="/">
            Pulsars
          </Navbar.Link>
        </Navbar.Item>
      </Navbar.Nav>
    </Navbar.Inner>
  </Navbar.Wrapper>
)

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
          <NavLink className="c-navbar__link" activeClassName="is-active" to="/objects/Flag">Flag</NavLink>
        </Navbar.Item>
        <Navbar.Item>
          <NavLink className="c-navbar__link" activeClassName="is-active" to="/components/Navbar">Navbar</NavLink>
        </Navbar.Item>
      </Navbar.Nav>
    </Navbar.Inner>
  </Navbar.Wrapper>
)

export default Routes
