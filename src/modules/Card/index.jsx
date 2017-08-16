import React, { Component } from 'react'

import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'

class CardExample extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <Example
        title="Card"
        description={description}
        config={{
          type: 'Card'
        }}
        ComponentToRender={ComponentToRender()}
      />
    )
  }
}

export default CardExample
