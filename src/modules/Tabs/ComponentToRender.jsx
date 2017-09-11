import React from 'react'
import T from 'prop-types'
import { Tabs } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'


const ComponentToRender = ({ controlled, activeId, disabledTab }, handleTabChange) => (
  <Tabs.Wrapper
    {...removeFalsy({ activeId: controlled ? activeId : false })}
    {...removeFalsy({ defaultActiveId: controlled ? false : 'panel-2' })}
    {...removeFalsy({ onTabChange: controlled ? handleTabChange : false })}
  >
    <Tabs.TabList>
      <Tabs.Tab target="panel-1">Tab 1</Tabs.Tab>
      <Tabs.Tab target="panel-2">Tab 2</Tabs.Tab>
      <Tabs.Tab target="panel-3" {...removeFalsy({ disabled: disabledTab })}>Tab 3</Tabs.Tab>
      <Tabs.Tab target="panel-4">Tab 4</Tabs.Tab>
    </Tabs.TabList>
    <Tabs.Panel id="panel-1">Panel 1 Content</Tabs.Panel>
    <Tabs.Panel id="panel-2">Panel 2 Content</Tabs.Panel>
    <Tabs.Panel id="panel-3">Panel 3 Content</Tabs.Panel>
    <Tabs.Panel id="panel-4">Panel 4 Content</Tabs.Panel>
  </Tabs.Wrapper>
)

ComponentToRender.propTypes = {
  controlled: T.bool.isRequired,
  disabledTab: T.bool.isRequired,
  activeId: T.string.isRequired
}

export default ComponentToRender
