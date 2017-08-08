import React, { Component } from 'react'
import { Navbar, SiteWrap, Section } from 'nebula-react'

import ComponentExample, { ComponentDescription, ComponentOptions, ComponentRendered } from 'components/ComponentExample'

import Description from './Description'
import Options from './Options'

const ComponentToRender = () => (
  <Navbar.Wrapper>
    <Navbar.Inner>
      <Navbar.Overlay />
      <Navbar.Wrap>
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
      </Navbar.Wrap>
    </Navbar.Inner>
  </Navbar.Wrapper>
)

class NavbarExample extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    const style = {
      position: 'relative',
      zIndex: 0,
      overflow: 'hidden',
      minHeight: '500px'
    }

    return (
      <SiteWrap padding>
        <Section>
          <h2>Navbar</h2>
          <ComponentExample type="Navbar" style={style}>
            <ComponentDescription>
              <Description />
            </ComponentDescription>
            <ComponentOptions>
              <Options />
            </ComponentOptions>
            <ComponentRendered>
              {ComponentToRender()}
            </ComponentRendered>
          </ComponentExample>
        </Section>
      </SiteWrap>
    )
  }
}

export default NavbarExample
