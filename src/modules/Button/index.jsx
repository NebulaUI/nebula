import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const componentNameOverride = {}

const initialState = {
  disabled: false,
  size: 'md',
  theme: 'alpha',
  type: 'button',
  fullWidth: false
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
        title="Button"
        options={options}
        description={description}
        config={{
          type: 'Button',
          componentNameOverride
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default RadioExample
