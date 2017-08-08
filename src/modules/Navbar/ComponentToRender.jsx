import React from 'react'
import { Navbar } from 'nebula-react'

const ComponentToRender = () => (
  <Navbar.Wrapper>
    <Navbar.Overlay aria-hidden="true" tabIndex="0" />
    <Navbar.Inner role="navigation">
      <Navbar.Toggle.Wrapper aria-hidden="true" tabIndex="0">
        <Navbar.Toggle.Bars />
      </Navbar.Toggle.Wrapper>
      <Navbar.Logo to="/">
        Nebula
      </Navbar.Logo>
      <Navbar.Nav>
        <Navbar.Item>
          <Navbar.Link to="/Spacetime">
            Spacetime
          </Navbar.Link>
        </Navbar.Item>
        <Navbar.Dropdown.Wrapper>
          <Navbar.Dropdown.Toggle className="is-active">
            Galaxies
          </Navbar.Dropdown.Toggle>
          <Navbar.Dropdown.Content>
            <Navbar.Item>
              <Navbar.Link to="/galaxies/milky-way">
                Milky Way
              </Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
              <Navbar.Link className="is-active" to="/galaxies/andromeda">
                Andromeda
              </Navbar.Link>
            </Navbar.Item>
          </Navbar.Dropdown.Content>
        </Navbar.Dropdown.Wrapper>
        <Navbar.Item>
          <Navbar.Link to="/pulsars">
            Pulsars
          </Navbar.Link>
        </Navbar.Item>
      </Navbar.Nav>
    </Navbar.Inner>
  </Navbar.Wrapper>
)

export default ComponentToRender
