import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const initialState = {
  qtyTabs: 3
}

const componentNameOverride = {
  TabsTabList: 'Tabs.TabList'
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
      model: optionsModel(this.state.qtyTabs)
    }
    return (
      <Example
        title="Tabs"
        description={description}
        options={options}
        config={{
          type: 'Tabs',
          componentNameOverride
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default TabsExample
