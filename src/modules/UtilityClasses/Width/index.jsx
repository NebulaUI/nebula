import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const initialState = {
  widths: {
    all: '3/4',
    md: '1/2@md'
  }
}

class WidthExample extends Component {
  constructor() {
    super()

    this.state = initialState
  }

  handleOptionChange = (key, value) => {
    this.setState({
      ...buildNewState(this.state, key, value)
    })
  }

  render() {
    const { state, handleOptionChange } = this
    const options = {
      state,
      handleChange: handleOptionChange,
      model: optionsModel
    }
    return (
      <Example
        title=""
        options={options}
        description={description}
        config={{
          type: 'Width',
          nebulaImportOverride: 'Card'
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default WidthExample
