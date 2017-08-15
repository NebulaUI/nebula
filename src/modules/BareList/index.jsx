import React, { Component } from 'react'

import Example from 'components/ComponentExample/Example'

import Description from './Description'
import ComponentToRender from './ComponentToRender'

const componentNameOverride = {
  BareListWrapper: 'BareList.Wrapper',
  BareListItem: 'BareList.Item'
}

class BareListExample extends Component {
  constructor() {
    super()

    this.state = {

    }
  }
  render() {
    return (
      <Example
        title="Bare List"
        Description={Description}
        config={{
          type: 'BareList',
          componentNameOverride
        }}
        ComponentToRender={ComponentToRender()}
      />
    )
  }
}

export default BareListExample
