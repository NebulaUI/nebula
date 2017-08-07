import React from 'react'
import T from 'prop-types'
import { Tabs } from 'nebula-react'

import Code from './Code'
import renderHTML from './utils/renderHTML'
import renderReact from './utils/renderReact'

const Source = ({ type, description, options, children }) => (
  <div>
    <Tabs.Wrapper>
      <Tabs.TabList>
        <Tabs.Tab>
          Description
        </Tabs.Tab>
        <Tabs.Tab>
          Options
        </Tabs.Tab>
        <Tabs.Tab>
          HTML code
        </Tabs.Tab>
        <Tabs.Tab>
          React code
        </Tabs.Tab>
      </Tabs.TabList>
      <Tabs.Panels>
        <Tabs.Panel>
          { description }
        </Tabs.Panel>
        <Tabs.Panel>
          { options }
        </Tabs.Panel>
        <Tabs.Panel>
          <Code>
            { renderHTML(children) }
          </Code>
        </Tabs.Panel>
        <Tabs.Panel>
          <Code componentName={type} language="jsx">
            { renderReact(children, type) }
          </Code>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs.Wrapper>
  </div>
)

Source.propTypes = {
  type: T.string.isRequired,
  description: T.node,
  options: T.node,
  children: T.node.isRequired
}


export default Source
