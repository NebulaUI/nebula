import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const initialState = {
  reverse: false,
  align: 'default',
  gutter: true,
  breakpoint: 'xs',
  nowrap: true,
  componentContentType: 'image',
  bodyContentType: 'text',
  wrapInCard: true
}

class FlagExample extends Component {
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
        title="Flag"
        options={options}
        description={description}
        config={{
          type: 'Flag',
          nebulaImportOverride: `Flag${state.wrapInCard ? ', Card' : ''}`
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default FlagExample
