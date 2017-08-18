import React from 'react'
import T from 'prop-types'
import { Tabs } from 'nebula-react'

import Code from './Code'
import renderHTML from './utils/renderHTML'
import renderReact from './utils/renderReact'

const Source = ({
  type,
  extraString,
  description, options,
  children,
  nebulaImportOverride,
  componentNameOverride
}) => (
  <div>
    <Tabs.Wrapper style={{ backfaceVisibility: 'hidden' }}>
      <Tabs.TabList>
        { description ? <Tabs.Tab>Description</Tabs.Tab> : null }
        { options ? <Tabs.Tab>Options</Tabs.Tab> : null }
        <Tabs.Tab>HTML code</Tabs.Tab>
        <Tabs.Tab>React code (ES6)</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.Panels>
        { description ? <Tabs.Panel>{description}</Tabs.Panel> : null }
        { options ? <Tabs.Panel>{options}</Tabs.Panel> : null }
        <Tabs.Panel>
          <Code>
            { renderHTML(children) }
          </Code>
        </Tabs.Panel>
        <Tabs.Panel>
          <Code
            componentName={type}
            nebulaImportOverride={nebulaImportOverride}
            extraString={extraString}
            language="jsx"
          >
            { renderReact(children, componentNameOverride) }
          </Code>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs.Wrapper>
  </div>
)

Source.propTypes = {
  type: T.string.isRequired,
  extraString: T.string,
  description: T.node,
  options: T.node,
  nebulaImportOverride: T.string,
  componentNameOverride: T.shape({}),
  children: T.node.isRequired
}


export default Source
