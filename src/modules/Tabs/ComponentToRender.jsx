import React from 'react'
import T from 'prop-types'
import { Tabs } from 'nebula-react'


const ComponentToRender = ({ qtyTabs }) => {
  const buildTabsArray = (list = [], curr = 0) => {
    if (curr === parseInt(qtyTabs, 10)) {
      return list
    }
    list.push(curr)
    return buildTabsArray(list, curr + 1)
  }

  const buildTabs = () => (
    <Tabs.TabList>
      {
        buildTabsArray().map(tab => (
          <Tabs.Tab key={tab}>Tab { tab + 1 }</Tabs.Tab>
        ))
      }
    </Tabs.TabList>
  )

  const buildPanels = () => (
    buildTabsArray().map(tab => (
      <Tabs.Panel key={tab}>Panel { tab + 1 } Lorem ipsum</Tabs.Panel>
    ))
  )

  return (
    <Tabs.Wrapper>
      {buildTabs()}
      {buildPanels()}
    </Tabs.Wrapper>
  )
}

ComponentToRender.propTypes = {
  qtyTabs: T.number.isRequired
}

export default ComponentToRender
