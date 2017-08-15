import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import Description from './Description'
import ComponentToRender from './ComponentToRender'

const componentNameOverride = {
  BareListWrapper: 'BareList.Wrapper',
  BareListItem: 'BareList.Item'
}

const optionsModel = [{
  title: 'Bare List',
  options: [{
    type: 'checkbox',
    stateKey: 'spacing.md',
    label: 'medium spacing across all breakpoints'
  }, {
    type: 'checkbox',
    stateKey: 'spacing.md@xs',
    label: 'medium spacing for screens above \'xs\' breakpoint'
  }, {
    type: 'checkbox',
    stateKey: 'spacing.md@sm',
    label: 'medium spacing for screens above \'sm\' breakpoint'
  }, {
    type: 'checkbox',
    stateKey: 'spacing.md@md',
    label: 'medium spacing for screens above \'md\' breakpoint'
  }, {
    type: 'checkbox',
    stateKey: 'spacing.md@lg',
    label: 'medium spacing for screens above \'lg\' breakpoint'
  }]
}]

const initialState = {
  spacing: {
    md: true,
    'md@xs': false,
    'md@sm': false,
    'md@md': false,
    'md@lg': false,
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
        title="Bare List"
        options={options}
        Description={Description}
        config={{
          type: 'BareList',
          nebulaImportOverride: 'BareList, Card',
          componentNameOverride
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default BareListExample
