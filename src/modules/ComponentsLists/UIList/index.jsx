import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const componentNameOverride = {
  UIListWrapper: 'UIList.Wrapper',
  UIListItem: 'UIList.Item'
}

const initialState = {
  wrapInCard: true,
  qtyItems: 3,
  spacing: {
    all: 'md'
  }
}

class BareListExample extends Component {
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
          type: 'UIList',
          nebulaImportOverride: `UIList${state.wrapInCard ? ', Card' : ''}`,
          componentNameOverride
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default BareListExample
