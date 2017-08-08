import React, { Component } from 'react'
import { Navbar, SiteWrap, Section } from 'nebula-react'

import ComponentExample, { ComponentDescription, ComponentRendered } from 'components/ComponentExample'

import Description from './Description'
import ComponentToRender from './ComponentToRender'

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
