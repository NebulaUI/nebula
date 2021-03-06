import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const componentNameOverride = {
  Checkbox: 'Form.Checkbox'
}

const initialState = {
  text: 'left',
  fill: 'none',
  size: '50px',
  verticalAlign: 'middle'
}

class IconExample extends Component {
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
        title=""
        options={options}
        description={description}
        config={{
          type: 'Icon',
          componentNameOverride,
          extraString: 'import github from \'path-to-github-icon.svg\'\n'
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default IconExample
