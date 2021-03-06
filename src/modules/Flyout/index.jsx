import React, { Component } from 'react'
import { Button } from 'nebula-react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'
import { NAMESPACE } from 'constants/index'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const componentNameOverride = {}

const initialState = {
  direction: 'se',
  closeButtonInContent: true,
  controlled: false,
  clickOutsideToClose: true,
  isOpen: 'closed',
  disabled: false,
  width: 'None',
  maxHeight: false,
  transition: true
}

const buildExtraString = state => (state.controlled ?
`
/*
  The state of controlled Flyout is handled externally by the consumer and 
  passed in via the 'isOpen' prop.
  This prop also determines whether or not this is a controlled component.
  You can listen to change events using 'onFlyoutChange'.
*/ 
`
: '')

class FlyoutExample extends Component {
  state = initialState

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
      model: [
        {
          ...optionsModel[0],
          options: this.state.controlled
            ? [
              ...optionsModel[0].options.slice(0, 2),
              ...optionsModel[0].options.slice(3)
            ] : optionsModel[0].options
        }
      ]
    }
    return (
      <div>
        {
          this.state.controlled && (
            <div className={`${NAMESPACE}u-push-bottom-md`}>
              <Button
                size="sm"
                theme="alpha"
                onClick={this.handleFlyoutToggle}
              >
                Toggle Flyout
              </Button>
            </div>
          )
        }
        <Example
          title="Flyout"
          options={options}
          description={description}
          config={{
            type: 'Flyout',
            componentNameOverride,
            nebulaImportOverride: `Flyout, Card${state.closeButtonInContent || state.buttonForOpen ? ', Button' : ''}${state.maxHeight ? ', Scroll' : ''}`,
            extraString: buildExtraString(this.state),
            htmlExampleOverride: ComponentToRender({
              ...state,
              isOpen: 'open',
              controlled: true
            })
          }}
          ComponentToRender={ComponentToRender({
            handleFlyoutToggle: this.handleFlyoutToggle,
            ...state })}
        />
      </div>
    )
  }
}

export default FlyoutExample
