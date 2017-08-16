import React from 'react'
import { Tabs } from 'nebula-react'


const GetStarted = () => (
  <div>
    <h1>Get started</h1>
    <p>Please choose which version of Nebula you wish to consume in your project</p>
    <Tabs.Wrapper>
      <Tabs.TabList>
        <Tabs.Tab>
          Nebula CSS
        </Tabs.Tab>
        <Tabs.Tab>
          Nebula Components
        </Tabs.Tab>
        <Tabs.Tab>
          Nebula React
        </Tabs.Tab>
      </Tabs.TabList>
      <Tabs.PanelList>
        <Tabs.Panel>
          Panel 1 Lorem ipsum
        </Tabs.Panel>
        <Tabs.Panel>
          Panel 2 Lorem ipsum
        </Tabs.Panel>
        <Tabs.Panel>
          Panel 3 Lorem ipsum
        </Tabs.Panel>
      </Tabs.PanelList>
    </Tabs.Wrapper>
  </div>
)

export default GetStarted
