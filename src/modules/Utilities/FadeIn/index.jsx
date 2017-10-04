import React, { Component } from 'react'

import Example from 'components/ComponentExample/Example'
import { buildNewState } from 'utils'
import { NAMESPACE } from 'constants/index'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const initialState = {
  render: true
}

const componentNameOverride = {
  FadeIn: 'FadeIn'
}

const buildHTMLExtraString = state => (
  state.render ?
  `<!--
  * After an immediate timeout the following class should be appended '${NAMESPACE}c-fade-in--has-mounted'
  <div class="${NAMESPACE}c-card ${NAMESPACE}c-fade-in ${NAMESPACE}c-fade-in--has-mounted">Hello Nebula.</div>
-->

` : ''
)

class FadeInExample extends Component {
  state = initialState

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
        description={description}
        options={options}
        config={{
          type: 'FadeIn',
          componentNameOverride,
          htmlExtraString: buildHTMLExtraString(state),
          nebulaImportOverride: `Card${state.render ? ', FadeIn' : ''}`
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default FadeInExample
