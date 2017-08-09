import React, { Component } from 'react'

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

  setSticky = ({ target: { checked } }) => {
    this.setState({
      sticky: checked
    })
  }

  setContent1Right = ({ target: { checked } }) => {
    this.setState({
      content1: {
        ...this.state.content1,
        right: checked
      }
    })
  }

  setContent2Right = ({ target: { checked } }) => {
    this.setState({
      content2: {
        ...this.state.content2,
        right: checked
      }
    })
  }

  setContent2KeepAtTop = ({ target: { checked } }) => {
    this.setState({
      content2: {
        ...this.state.content2,
        keepAtTop: checked
      }
    })
  }

  setContent2ResetLineHeight = ({ target: { checked } }) => {
    this.setState({
      content2: {
        ...this.state.content2,
        resetLineHeight: checked
      }
    })
  }

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
