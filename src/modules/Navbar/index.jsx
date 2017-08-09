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

const style = {
  position: 'relative',
  overflow: 'hidden',
  minHeight: '500px'
}

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

  setSticky = ({ target: { id, checked } }) =>
    this.setNewState(id, checked)

  setContent1Right = ({ target: { id, checked } }) =>
    this.setNewState(id, checked)

  setContent2Right = ({ target: { id, checked } }) =>
    this.setNewState(id, checked)

  setContent2KeepAtTop = ({ target: { id, checked } }) =>
    this.setNewState(id, checked)

  setContent2ResetLineHeight = ({ target: { id, checked } }) =>
    this.setNewState(id, checked)

  render() {
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
              setSticky={this.setSticky}
              setContent1Right={this.setContent1Right}
              setContent2Right={this.setContent2Right}
              setContent2KeepAtTop={this.setContent2KeepAtTop}
              setContent2ResetLineHeight={this.setContent2ResetLineHeight}
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
