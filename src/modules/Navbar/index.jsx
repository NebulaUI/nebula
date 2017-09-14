import React, { Component } from 'react'
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
  sticky: false,
  reverseSourceOrder: false,
  reactRouter: false,
  logo: {
    included: true,
    componentType: 'image'
  },
  navItems: {
    included: true,
    right: false,
    icon: true,
    dropdownAlignment: 'south-east'
  },
  secondaryContent: {
    included: true,
    right: true,
    keepAtTop: true,
    resetLineHeight: true,
    componentType: 'button'
  }
}

const buildStyle = ({ sticky }) => ({
  position: 'relative',
  overflow: 'hidden',
  minHeight: '500px',
  zIndex: sticky ? 3 : 0
})

const buildExtraString = ({ reactRouter, navItems }) => {
  let str = reactRouter
    ? 'import { BrowserRouter as Router, NavLink } from \'react-router-dom\'\n'
    : ''
  str += navItems.icon && navItems.included
    ? 'import lightbulb from \'path-to-lightbulb-icon.svg\'\n'
    : ''
  return str
}

class NavbarExample extends Component {
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
    const componentExampleConfig = {
      type: 'Navbar',
      componentNameOverride,
      extraString: buildExtraString(state),
      style: buildStyle(state),
      nebulaImportOverride: `Navbar${state.secondaryContent.componentType === 'button' ? ', Button' : ''}${state.navItems.icon ? ', Icon' : ''}`
    }
    const options = {
      state,
      handleChange: handleOptionChange,
      model: optionsModel
    }
    return (
      <Example
        title="Navbar"
        options={options}
        description={description}
        ComponentToRender={ComponentToRender(state)}
        config={componentExampleConfig}
      />
    )
  }
}

export default NavbarExample
