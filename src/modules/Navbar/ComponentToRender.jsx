import React from 'react'
import { Navbar } from 'nebula-react'

const ComponentToRender = () => (
  <Navbar.Wrapper>
    <Navbar.Overlay aria-hidden="true" tabIndex="0" />
    <Navbar.Inner role="navigation">
      <Navbar.Toggle.Wrapper aria-hidden="true" tabIndex="0">
        <Navbar.Toggle.Bars />
      </Navbar.Toggle.Wrapper>
      <Navbar.Logo to="/nebula">
        Nebula
      </Navbar.Logo>
      <Navbar.Content>
        <Navbar.Item>
          <Navbar.Link to="/nebula/spacetime">
            Spacetime
          </Navbar.Link>
        </Navbar.Item>
        <Navbar.Dropdown.Wrapper>
          <Navbar.Dropdown.Toggle className="is-active">
            Galaxies
          </Navbar.Dropdown.Toggle>
          <Navbar.Dropdown.Content>
            <Navbar.Item>
              <Navbar.Link to="/nebula/galaxies/milky-way">
                Milky Way
              </Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
              <Navbar.Link className="is-active" to="/nebula/galaxies/andromeda">
                Andromeda
              </Navbar.Link>
            </Navbar.Item>
          </Navbar.Dropdown.Content>
        </Navbar.Dropdown.Wrapper>
        <Navbar.Item>
          <Navbar.Link to="/nebula/pulsars">
            Pulsars
          </Navbar.Link>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Content right node="div" keepAtTop>
        <Navbar.Item node="div" resetLineHeight>
          <button className="c-btn c-btn--sm c-btn--alpha">
            Call to action
          </button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar.Inner>
  </Navbar.Wrapper>
)

export default ComponentToRender
