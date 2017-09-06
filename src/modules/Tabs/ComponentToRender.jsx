import React from 'react'
import T from 'prop-types'
import { Tabs } from 'nebula-react'


const ComponentToRender = ({ }) => {
  return (
    <Tabs.Wrapper defaultActiveId="panel-2">
      <Tabs.TabList>
        <Tabs.Tab target="panel-1">Tab 1</Tabs.Tab>
        <Tabs.Tab target="panel-2">Tab 2</Tabs.Tab>
        <Tabs.Tab target="panel-3">Tab 3</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.Panel id="panel-1">Panel 1 Content</Tabs.Panel>
      <Tabs.Panel id="panel-2">Panel 2 Content</Tabs.Panel>
      <Tabs.Panel id="panel-3">Panel 3 Content</Tabs.Panel>
    </Tabs.Wrapper>
  )
}

ComponentToRender.propTypes = {}

export default ComponentToRender
