import React, { Component } from 'react'
import { Button } from 'nebula-react'

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
  breakpoint: 'all',
  expanded: 'collapsed',
  controlled: false
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

  handleFoldableToggle = () =>
    this.setState({ expanded: this.state.expanded === 'expanded' ? 'collapsed' : 'expanded' })

  render() {
    const { state, handleOptionChange } = this
    const options = {
      state,
      handleChange: handleOptionChange,
      model: optionsModel
    }
    return (
      <div>
        {
          this.state.controlled &&
            <Button
              size="sm"
              theme="alpha"
              onClick={this.handleFoldableToggle}
            >
              Click to toggle foldable
            </Button>
        }
        <Example
          title="Foldable"
          description={description}
          options={options}
          config={{
            type: 'Foldable',
            nebulaImportOverride: `Foldable${state.cardInBody || state.cardWrapping ? ', Card' : ''}`
          }}
          ComponentToRender={ComponentToRender(state, this.handleFoldableToggle)}
        />
      </div>
    )
  }
}

export default FoldableExample
