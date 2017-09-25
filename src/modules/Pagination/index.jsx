import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const componentNameOverride = {
  BrowserRouter: 'Router'
}

const initialState = {}


const buildExtraString = ({ reactRouter }) => (
  reactRouter
    ? 'import { BrowserRouter as Router, Link } from \'react-router-dom\'\n'
    : ''
)

class PaginationExample extends Component {
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
        title="Pagination"
        options={options}
        description={description}
        config={{
          type: 'Pagination',
          componentNameOverride,
          extraString: buildExtraString(state)
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default PaginationExample
