import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'

import optionsModel from './options'

const initialState = {
  qtyTabs: 3,
  initialActiveIndex: 1
}

class TabsExample extends Component {
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
        title="Tabs"
        description={description}
        options={options}
        config={{
          type: 'Tabs'
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default TabsExample
