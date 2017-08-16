import React, { Component } from 'react'

import Example from 'components/ComponentExample/Example'
import { buildNewState } from 'utils'

import description from './description.md'
import ComponentToRender from './ComponentToRender'


const componentNameOverride = {
  SiteWrap: 'SiteWrap'
}


const optionsModel = [{
  title: 'Section',
  options: [
    {
      type: 'checkbox',
      stateKey: 'nestCard',
      label: 'Wrap Section inside of a Card component'
    }
  ]
}]

const initialState = {
  padding: false,
  nestCard: true
}

class SiteWrapExample extends Component {
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
        title="Section"
        description={description}
        options={options}
        config={{
          type: 'Section',
          componentNameOverride,
          nebulaImportOverride: `Section${state.nestCard ? ', Card' : ''}`
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default SiteWrapExample
