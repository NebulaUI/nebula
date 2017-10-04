import React, { Component } from 'react'
import { Button } from 'nebula-react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const componentNameOverride = {
  ButtonDropdownWrapper: 'ButtonDropdown.Wrapper',
  ButtonDropdownContent: 'ButtonDropdown.Content',
  ButtonDropdownToggle: 'ButtonDropdown.Toggle',
  ButtonDropdownClose: 'ButtonDropdown.Close'
}

const initialState = {
  disabled: false,
  size: 'md',
  theme: 'beta',
  direction: 'left',
  clickOutsideToClose: true,
  reactRouter: false,
  controlled: false,
  fullWidth: false,
  isOpen: 'closed',
  maxHeight: false,
  transition: true
}

const buildExtraString = ({ reactRouter }) => (
  reactRouter
    ? 'import { BrowserRouter as Router, Link } from \'react-router-dom\'\n'
    : ''
)

class ButtonDropdownExample extends Component {
  constructor() {
    super()

    this.state = initialState
  }

  handleOptionChange = (key, value) => {
    this.setState({
      ...buildNewState(this.state, key, value)
    })
  }

  toggleButtonDropdown = () => {
    this.setState({ isOpen: this.state.isOpen === 'open' ? 'closed' : 'open' })
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
              ...optionsModel[0].options.slice(0, 1),
              ...optionsModel[0].options.slice(2)
            ] : optionsModel[0].options
        }
      ]
    }
    return (
      <div>
        {
          this.state.controlled && (
            <Button
              size="sm"
              theme="alpha"
              onClick={this.toggleButtonDropdown}
            >
              Click to toggle dropdown
            </Button>
          )
        }
        <Example
          title=""
          options={options}
          description={description}
          config={{
            type: 'ButtonDropdown',
            componentNameOverride,
            extraString: buildExtraString(state),
            nebulaImportOverride: `ButtonDropdown, Button, Card${state.maxHeight ? ', Scroll' : ''}`,
            htmlExampleOverride: ComponentToRender({
              ...state,
              isOpen: 'open',
              controlled: true
            })
          }}
          ComponentToRender={ComponentToRender({
            ...state,
            handleButtonDropdownChange: this.toggleButtonDropdown
          })}
        />
      </div>
    )
  }
}

export default ButtonDropdownExample
