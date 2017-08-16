import React from 'react'
import T from 'prop-types'
import { Tabs } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ qtyTabs, initialActiveIndex }) => {
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

  const buildPanelList = () => (
    <Tabs.PanelList>
      {
        buildTabsArray().map(tab => (
          <Tabs.Panel key={tab}>Panel { tab + 1 } Lorem ipsum</Tabs.Panel>
        ))
      }
    </Tabs.PanelList>
  )

  return (
    <Tabs.Wrapper
      {...removeFalsy({ initialActiveIndex: parseInt(initialActiveIndex, 10) })}
    >
      {buildTabs()}
      {buildPanelList()}
    </Tabs.Wrapper>
  )
}

ComponentToRender.propTypes = {
  qtyTabs: T.number.isRequired,
  initialActiveIndex: T.number.isRequired
}

export default ComponentToRender
