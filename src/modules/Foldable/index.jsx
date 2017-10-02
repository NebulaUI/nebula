import React, { Component } from 'react'
import { Button } from 'nebula-react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'

import optionsModel from './options'

const initialState = {
  headerPadding: true,
  bordered: false,
  cardInBody: true,
  cardWrapping: false,
  breakpoint: '',
  open: 'open',
  disabled: false,
  controlled: false,
  transition: true
}

const buildExtraString = state => (state.controlled ?
`
/*
  The state of controlled foldable is handled externally by the consumer and 
  passed in via the 'open' prop.
  This prop also determines whether or not this is a controlled component.
  You can listen to change events using 'onFoldableChange'.
*/ 
`
: '')

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
    this.setState({ open: this.state.open === 'open' ? 'closed' : 'open' })

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
            nebulaImportOverride: `Foldable${state.cardInBody || state.cardWrapping ? ', Card' : ''}`,
            extraString: buildExtraString(state)
          }}
          ComponentToRender={ComponentToRender(state, this.handleFoldableToggle)}
        />
      </div>
    )
  }
}

export default FoldableExample
