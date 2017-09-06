import React, { Component } from 'react'
import { Button } from 'nebula-react'
import { buildNewState } from 'utils'
import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'
import optionsModel from './options'

const initialState = {
  controlled: false,
  activeId: 'panel-1'
}

const componentNameOverride = {
  TabsTabList: 'Tabs.TabList'
}

const buildExtraString = state => (state.controlled ?
`
/*
  The state of controlled tabs is handled externally by the consumer and 
  passed in via 'activeId'.
  You can listen to change events using 'onTabChange callback prop'
*/ 
`
: '')

class TabsExample extends Component {
  constructor() {
    super()

    this.state = initialState
  }

  handleOptionChange = (key, value) => {
    this.setState({
      ...buildNewState(this.state, key, value)
    })
  }

  handleTabChange = activeId => this.setState({ activeId })

  render() {
    const { state, handleOptionChange } = this
    const options = {
      state,
      handleChange: handleOptionChange,
      model: optionsModel(this.state.qtyTabs)
    }
    return (
      <div>
        {
          this.state.controlled && (
            <Button size="sm" theme="alpha" onClick={() => this.handleTabChange('panel-3')}>Set to Tab 3</Button>
          )
        }
        <Example
          title="Tabs"
          description={description}
          options={options}
          config={{
            type: 'Tabs',
            componentNameOverride,
            extraString: buildExtraString(state)
          }}
          ComponentToRender={ComponentToRender(state, this.handleTabChange)}
        />
      </div>
    )
  }
}

export default TabsExample
