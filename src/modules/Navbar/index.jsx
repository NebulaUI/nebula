import React, { Component } from 'react'
import { buildNewState } from 'utils'

import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'

const componentNameOverride = {
  BrowserRouter: 'Router'
}

const optionsModel = [{
  title: 'Global Navbar options',
  options: [{
    type: 'checkbox',
    stateKey: 'sticky',
    label: 'Fix at the top of the viewport.'
  }, {
    type: 'checkbox',
    stateKey: 'reactRouter',
    label: 'React Router (v4) Integration.'
  }, {
    type: 'checkbox',
    stateKey: 'logoIncluded',
    label: 'Include logo.'
  }, {
    type: 'checkbox',
    stateKey: 'reverseSourceOrder',
    label: 'Reverse the source order of the Nav Items and Secondary content.'
  }]
}, {
  title: 'Nav Items',
  options: [{
    type: 'checkbox',
    stateKey: 'navItems.included',
    label: 'include.'
  }, {
    type: 'checkbox',
    stateKey: 'navItems.right',
    label: 'Align nav items to the right (float right).'
  }, {
    type: 'radio',
    stateKey: 'navItems.dropdownAlignment',
    label: 'Dropdown alignment.',
    options: [{
      value: 'south-east',
      label: 'South East'
    }, {
      value: 'south-west',
      label: 'South West'
    }]
  }]
}, {
  title: 'Secondary Content',
  options: [{
    type: 'checkbox',
    stateKey: 'secondaryContent.included',
    label: 'include.'
  }, {
    type: 'checkbox',
    stateKey: 'secondaryContent.right',
    label: 'Align secondary content to the right (float right).'
  }, {
    type: 'checkbox',
    stateKey: 'secondaryContent.keepAtTop',
    label: 'Keep secondary content at the top when collapsed (Small viewports).'
  }, {
    type: 'checkbox',
    stateKey: 'secondaryContent.resetLineHeight',
    label: 'Reset the line-height for secondary content.'
  }, {
    type: 'radio',
    stateKey: 'secondaryContent.componentType',
    label: 'Secondary content type.',
    options: [{
      value: 'button',
      label: 'Button'
    }, {
      value: 'text',
      label: 'Plain text'
    }]
  }]
}]

const initialState = {
  sticky: false,
  reverseSourceOrder: false,
  logoIncluded: true,
  reactRouter: false,
  navItems: {
    included: true,
    right: false,
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
  zIndex: sticky ? 1 : 0
})

const buildExtraString = ({ reactRouter }) => (
  reactRouter
    ? 'import { BrowserRouter as Router, NavLink } from \'react-router-dom\'\n'
    : ''
)

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
      style: buildStyle(state)
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
