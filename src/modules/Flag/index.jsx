import React, { Component } from 'react'

import ComponentExample, {
  ComponentDescription,
  ComponentOptions,
  ComponentRendered
} from 'components/ComponentExample'

import Description from './Description'
import Options from './Options'
import ComponentToRender from './ComponentToRender'

class FlagExample extends Component {
  constructor() {
    super()

    this.state = {
      align: false,
      reverse: false
    }
  }

  setAlignment = (e) => {
    this.setState({
      align: e.target.value !== 'default' ? e.target.value : false
    })
  }

  setReverse = (e) => {
    this.setState({ reverse: e.target.checked })
  }

  render() {
    const { align, reverse } = this.state
    const flagWrapperProps = {}
    if (align) {
      flagWrapperProps.align = align
    }

    if (reverse) {
      flagWrapperProps.reverse = reverse
    }
    const props = {
      flagWrapperProps
    }
    return (
      <div>
        <h1>Flag Object</h1>
        <ComponentExample type="Flag">
          <ComponentDescription>
            <Description />
          </ComponentDescription>
          <ComponentOptions>
            <Options
              optionState={this.state}
              setAlignment={this.setAlignment}
              setReverse={this.setReverse}
            />
          </ComponentOptions>
          <ComponentRendered>
            {ComponentToRender(props)}
          </ComponentRendered>
        </ComponentExample>
      </div>
    )
  }
}

export default FlagExample
