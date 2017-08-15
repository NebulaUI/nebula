import React, { Component } from 'react'

import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import Description from './Description'
import ComponentToRender from './ComponentToRender'

const gutterModel = {
  title: 'Gutters',
  options: [
    {
      type: 'radio',
      stateKey: 'gutter.all',
      label: 'Gutter across all screen sizes',
      options: [
        {
          value: '',
          label: 'None'
        },
        {
          value: 'sm',
          label: 'Small'
        },
        {
          value: 'md',
          label: 'Medium'
        },
        {
          value: 'lg',
          label: 'Large'
        }
      ]
    },
    {
      type: 'radio',
      stateKey: 'gutter.xs',
      label: 'Gutter across screen sizes larger than "xs" breakpoint',
      options: [
        {
          value: '',
          label: 'None'
        },
        {
          value: 'sm@xs',
          label: 'Small'
        },
        {
          value: 'md@xs',
          label: 'Medium'
        },
        {
          value: 'lg@xs',
          label: 'Large'
        }
      ]
    },
    {
      type: 'radio',
      stateKey: 'gutter.sm',
      label: 'Gutter across screen sizes larger than "sm" breakpoint',
      options: [
        {
          value: '',
          label: 'None'
        },
        {
          value: 'sm@sm',
          label: 'Small'
        },
        {
          value: 'md@sm',
          label: 'Medium'
        },
        {
          value: 'lg@sm',
          label: 'Large'
        }
      ]
    },
    {
      type: 'radio',
      stateKey: 'gutter.md',
      label: 'Gutter across screen sizes larger than "md" breakpoint',
      options: [
        {
          value: '',
          label: 'None'
        },
        {
          value: 'sm@md',
          label: 'Small'
        },
        {
          value: 'md@md',
          label: 'Medium'
        },
        {
          value: 'lg@md',
          label: 'Large'
        }
      ]
    },
    {
      type: 'radio',
      stateKey: 'gutter.lg',
      label: 'Gutter across screen sizes larger than "lg" breakpoint',
      options: [
        {
          value: '',
          label: 'None'
        },
        {
          value: 'sm@lg',
          label: 'Small'
        },
        {
          value: 'md@lg',
          label: 'Medium'
        },
        {
          value: 'lg@lg',
          label: 'Large'
        }
      ]
    }
  ]
}

const optionsModel = [{
  title: 'Grid',
  options: [
    {
      type: 'checkbox',
      stateKey: 'matrix',
      label: 'Matrix - vertical gutters mirroring horizontal'
    },
    {
      type: 'checkbox',
      stateKey: 'equalHeight',
      label: 'Equal height grid items'
    },
    {
      type: 'checkbox',
      stateKey: 'reverse',
      label: 'Reverse horizontal ordering'
    },
    {
      type: 'radio',
      stateKey: 'align',
      label: 'Vertical alignment of Grid Items',
      options: [
        {
          value: '',
          label: 'Top'
        },
        {
          value: 'center',
          label: 'Center'
        },
        {
          value: 'bottom',
          label: 'Bottom'
        }
      ]
    }
  ]
},
  gutterModel
]

const initialState = {
  matrix: true,
  equalHeight: false,
  reverse: false,
  align: '',
  gutter: {
    all: 'md',
    xs: '',
    sm: '',
    md: '',
    lg: ''
  }
}

class BareListExample extends Component {
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
        title="Grid"
        options={options}
        Description={Description}
        config={{
          type: 'Grid',
          nebulaImportOverride: 'Grid, Card'
        }}
        ComponentToRender={ComponentToRender(state)}
      />
    )
  }
}

export default BareListExample
