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

class NavbarExample extends Component {
  constructor() {
    super()

    this.state = {
      sticky: false,
      content1: {
        right: false
      },
      content2: {
        right: true,
        keepAtTop: true,
        resetLineHeight: true
      }
    }
  }

  setNewState = (id, value) => {
    this.setState({
      ...buildNewState(this.state, id, value)
    })
  }

  handleCheckboxChange = ({ target }) => {
    this.setNewState(target.getAttribute('data-stateKey'), target.checked)
  }


  render() {
    const style = {
      position: 'relative',
      overflow: 'hidden',
      minHeight: '500px',
      zIndex: this.state.sticky ? 1 : 0
    }

    return (
      <div>
        <h1>Navbar</h1>
        <ComponentExample type="Navbar" style={style}>
          <ComponentDescription>
            <Description />
          </ComponentDescription>
          <ComponentOptions>
            <Options
              optionState={this.state}
              setCheckBoxOption={this.handleCheckboxChange}
            />
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
