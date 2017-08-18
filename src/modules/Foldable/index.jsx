import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'

import optionsModel from './options'

const initialState = {
  qtyFoldableComponents: 1,
  headerPadding: true,
  bordered: false,
  cardInBody: true,
  cardWrapping: false,
  breakpoint: 'all'
}

class FoldableExample extends Component {
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
        title="Foldable"
        description={description}
        options={options}
        config={{
          type: 'Foldable',
          nebulaImportOverride: `Foldable${state.cardInBody || state.cardWrapping ? ', Card' : ''}`
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default FoldableExample
