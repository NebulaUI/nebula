import React, { Component } from 'react'
import ComponentExample, { ComponentDescription, ComponentRendered } from 'components/ComponentExample'

import Description from './Description'
import ComponentToRender from './ComponentToRender'

const componentNameOverride = {
  BareListWrapper: 'BareList.Wrapper',
  BareListItem: 'BareList.Item'
}

class FlagExample extends Component {
  constructor() {
    super()

    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>Bare List</h1>
        <ComponentExample type="BareList" componentNameOverride={componentNameOverride}>
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

export default FlagExample
