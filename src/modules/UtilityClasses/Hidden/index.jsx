import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const initialState = {
  hidden: false,
  hiddenBreakpoint: 'lg',
  hiddenBreakpointMax: 'xs'
}

class HiddenExample extends Component {
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
          type: 'Hidden',
          nebulaImportOverride: 'Card'
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default HiddenExample
