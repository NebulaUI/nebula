import React, { Component } from 'react'
import { Button } from 'nebula-react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const componentNameOverride = {}

const initialState = {
  direction: 'se',
  closeButtonInContent: true,
  controlled: false,
  isOpen: 'open'
}

class RadioExample extends Component {
  constructor() {
    super()

    this.state = initialState
  }

  handleOptionChange = (key, value) => {
    this.setState({
      ...buildNewState(this.state, key, value)
    })
  }

  handleFlyoutToggle = () => {
    this.setState({
      isOpen: this.state.isOpen === 'open' ? 'closed' : 'open'
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
      <div>
        {
          this.state.controlled &&
          <Button
            size="sm"
            theme="alpha"
            onClick={this.handleFlyoutToggle}
          >
              Click to toggle
          </Button>
        }
        <Example
          title="Flyout"
          options={options}
          description={description}
          config={{
            type: 'Flyout',
            componentNameOverride,
            nebulaImportOverride: `Flyout, Card${state.closeButtonInContent || state.buttonForOpen ? ', Button' : ''}`
          }}
          ComponentToRender={ComponentToRender(state)}
        />
      </div>
    )
  }
}

export default RadioExample
