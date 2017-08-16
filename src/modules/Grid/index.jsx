import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const initialState = {
  matrix: true,
  equalHeight: false,
  reverse: false,
  align: '',
  cardInItems: true,
  gutter: {
    all: 'md'
  },
  item1: {
    sizes: {
      all: '1/2'
    }
  },
  item2: {
    sizes: {
      all: '1/2'
    }
  },
  item3: {
    sizes: {
      all: '1/3'
    }
  },
  item4: {
    sizes: {
      all: '2/3'
    }
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
        title="Grid"
        options={options}
        description={description}
        config={{
          type: 'Grid',
          nebulaImportOverride: `Grid${state.cardInItems ? ', Card' : ''}`
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default BareListExample
