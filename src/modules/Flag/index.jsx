import React, { Component } from 'react'
import { buildNewState } from 'utils'

import Dumb from 'components/ComponentExample/Dumb'

import Description from './Description'
import ComponentToRender from './ComponentToRender'

const optionsModel = [{
  title: 'Flag',
  options: [{
    type: 'checkbox',
    stateKey: 'reverse',
    label: 'Reverse.'
  }, {
    type: 'select',
    stateKey: 'align',
    label: 'Select alignment.',
    options: [{
      value: 'top',
      label: 'Top'
    }, {
      value: 'center',
      label: 'Center'
    }, {
      value: 'bottom',
      label: 'Bottom'
    }]
  }]
}]

const initialState = {
  reverse: false,
  align: 'center'
}

class FlagExample extends Component {
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
    return (
      <Dumb
        title="Flag"
        type="Flag"
        state={state}
        Description={Description}
        ComponentToRender={ComponentToRender}
        handleOptionChange={handleOptionChange}
        optionsModel={optionsModel}
      />
    )
  }
}

export default FlagExample
