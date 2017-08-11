import React, { Component } from 'react'
import { buildNewState } from 'utils'

import ComponentExample, {
  ComponentDescription,
  ComponentRendered,
  ComponentOptions
} from 'components/ComponentExample'

import Description from './Description'
import Options from './Options'
import ComponentToRender from './ComponentToRender'

const componentNameOverride = {
  BrowserRouter: 'Router'
}


class NavbarExample extends Component {
  constructor() {
    super()

    this.state = {
      sticky: false,
      reverseSourceOrder: false,
      logoIncluded: true,
      reactRouter: false,
      navItems: {
        included: true,
        right: false,
        dropdownAlignment: 'south-east'
      },
      secondaryContent: {
        included: true,
        right: true,
        keepAtTop: true,
        resetLineHeight: true,
        componentType: 'button'
      }
    }
  }

  handleOptionChange = (key, value) => {
    this.setState({
      ...buildNewState(this.state, key, value)
    })
  }

  render() {
    const style = {
      position: 'relative',
      overflow: 'hidden',
      minHeight: '500px',
      zIndex: this.state.sticky ? 1 : 0
    }

    const extraString = this.state.reactRouter
      ? `
import { BrowserRouter as Router, NavLink } from 'react-router-dom'`
      : ''

    return (
      <div>
        <h1>Navbar</h1>
        <ComponentExample extraString={extraString} type="Navbar" componentNameOverride={componentNameOverride} style={style}>
          <ComponentDescription>
            <Description />
          </ComponentDescription>
          <ComponentOptions>
            <Options optionState={this.state} handleChange={this.handleOptionChange} />
          </ComponentOptions>
          <ComponentRendered>
            {ComponentToRender(this.state)}
          </ComponentRendered>
        </ComponentExample>
      </div>
    )
  }
}

export default NavbarExample
