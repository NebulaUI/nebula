import React, { Component } from 'react'

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
      <div>
        <h1>Navbar</h1>
        <ComponentExample type="Navbar" style={style}>
          <ComponentDescription>
            <Description />
          </ComponentDescription>
          <ComponentRendered>
            {ComponentToRender()}
          </ComponentRendered>
        </ComponentExample>
      </div>
    )
  }
}

export default NavbarExample
