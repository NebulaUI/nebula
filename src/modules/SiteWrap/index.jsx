import React, { Component } from 'react'

import Example from 'components/ComponentExample/Example'
import { buildNewState } from 'utils'

import description from './description.md'
import ComponentToRender from './ComponentToRender'


const componentNameOverride = {
  SiteWrap: 'SiteWrap'
}


const optionsModel = [{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'padding',
      label: 'Padding (Adds left and right padding)'
    },
    {
      type: 'checkbox',
      stateKey: 'nestCard',
      label: 'Nest a Card component inside of Site Wrap'
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
        title="Site Wrap"
        description={description}
        options={options}
        config={{
          type: 'SiteWrap',
          componentNameOverride,
          nebulaImportOverride: `SiteWrap${state.nestCard ? ', Card' : ''}`
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default SiteWrapExample
