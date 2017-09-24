import React from 'react'
import T from 'prop-types'
import { Tabs, Button } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'


const ComponentToRender = ({ controlled, activeId, disabledTab, spreadItems }, handleTabChange) => (
  <Tabs.Wrapper
    {...removeFalsy({ activeId: controlled ? activeId : false })}
    {...removeFalsy({ defaultActiveId: controlled ? false : 'panel-2' })}
    {...removeFalsy({ onChange: controlled ? handleTabChange : false })}
  >
    <Tabs.TabList {...removeFalsy({ spreadItems })}>
      <Tabs.Tab target="panel-1">Tab 1</Tabs.Tab>
      <Tabs.Tab target="panel-2">Tab 2</Tabs.Tab>
      <Tabs.Tab target="panel-3" {...removeFalsy({ disabled: disabledTab })}>Tab 3</Tabs.Tab>
      <Tabs.Tab target="panel-4" {...removeFalsy({ disabled: disabledTab })}>Tab 4</Tabs.Tab>
      <Tabs.Tab target="panel-5">Tab 5</Tabs.Tab>
      <Tabs.Tab target="panel-6">Tab 6</Tabs.Tab>
    </Tabs.TabList>
    <Tabs.Panel id="panel-1">
      <div>Panel 1 Content</div>
      {
        controlled &&
          <Button
            size="sm"
            theme="alpha"
            onClick={() => handleTabChange('panel-6')}
          >
            Activate panel 6
          </Button>
      }
    </Tabs.Panel>
    <Tabs.Panel id="panel-2">Panel 2 Content</Tabs.Panel>
    <Tabs.Panel id="panel-3">Panel 3 Content</Tabs.Panel>
    <Tabs.Panel id="panel-4">Panel 4 Content</Tabs.Panel>
    <Tabs.Panel id="panel-5">Panel 5 Content</Tabs.Panel>
    <Tabs.Panel id="panel-6">Panel 6 Content</Tabs.Panel>
  </Tabs.Wrapper>
)

ComponentToRender.propTypes = {
  controlled: T.bool.isRequired,
  disabledTab: T.bool.isRequired,
  activeId: T.string.isRequired,
  spreadItems: T.bool.isRequired
}

export default ComponentToRender
