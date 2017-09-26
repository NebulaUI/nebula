import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const componentNameOverride = {
  BrowserRouter: 'Router'
}

const initialState = {
  status: '',
  isActive: false,
  renderAs: 'div'
}

const buildExtraString = ({ renderAs }) => (
  renderAs === 'RRLink'
    ? 'import { BrowserRouter as Router, Link } from \'react-router-dom\'\n'
    : ''
)

class PillExample extends Component {
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
        title="Pill"
        options={options}
        description={description}
        config={{
          type: 'Pill',
          componentNameOverride,
          extraString: buildExtraString(state)
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default PillExample
