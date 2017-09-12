import React, { Component } from 'react'
import { Button } from 'nebula-react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const componentNameOverride = {
  BrowserRouter: 'Router',
  NavbarContentWrapper: 'Navbar.ContentWrapper'
}

const initialState = {
  timeout: false,
  clickOutsideDeactivates: true,
  closeButtonInContent: false,
  isOpen: false,
  alignTop: false,
  width: 'default'
}

const extraString =
`
/*
  The state of the Modal open / close is handled externally by the consumer by wrapping
  <Modal.Wrapper /> in a conditional.
  e.g.

  <div>
    { this.state.isModalOpen && (
      <Modal.Wrapper closeModal={this.handleClose}>
        ...
      </Modal.Wrapper>
    )}
  </div>

  You can hook into the modal close event via the "closeModal" prop
*/ 
`

class ModalExample extends Component {
  constructor() {
    super()

    this.state = initialState
  }

  handleOptionChange = (key, value) => {
    this.setState({
      ...buildNewState(this.state, key, value)
    })
  }

  close = () => this.setState({ isOpen: false })

  open = () => this.setState({ isOpen: true })

  render() {
    const { state, handleOptionChange } = this
    const options = {
      state,
      handleChange: handleOptionChange,
      model: optionsModel
    }
    return (
      <div>
        <Button
          size="sm"
          theme="alpha"
          onClick={this.open}
        >
          Open Modal dialog
        </Button>
        <Example
          title="Modal Dialog"
          options={options}
          description={description}
          config={{
            type: 'Modal',
            extraString,
            componentNameOverride,
            nebulaImportOverride: 'Modal, Button',
            codeOverride: (
              <div>
                <Button onClick={this.open}>Open Modal Dialog</Button>
                {
                  ComponentToRender({
                    ...state,
                    isOpen: true,
                    close: this.close
                  })
                }
              </div>
            )
          }}
          ComponentToRender={ComponentToRender({
            ...state,
            close: this.close
          })}
        />
      </div>
    )
  }
}

export default ModalExample
