import React, { Component } from 'react'

import Example from 'components/ComponentExample/Example'

import Description from './Description'
import ComponentToRender from './ComponentToRender'

class BareListExample extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <Example
        title="Card"
        Description={Description}
        config={{
          type: 'Card'
        }}
        ComponentToRender={ComponentToRender()}
      />
    )
  }
}

export default BareListExample
