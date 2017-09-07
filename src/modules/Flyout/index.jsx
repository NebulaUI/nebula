import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const componentNameOverride = {}

const initialState = {
  direction: 'se',
  closeButtonInContent: true,
  buttonForOpen: true
}

class RadioExample extends Component {
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
        title="Flyout"
        options={options}
        description={description}
        config={{
          type: 'Flyout',
          componentNameOverride,
          nebulaImportOverride: `Flyout, Card${state.closeButtonInContent || state.buttonForOpen ? ', Button' : ''}`
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default RadioExample
