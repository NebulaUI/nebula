import React from 'react'
import { withRouter } from 'react-router'
import T from 'prop-types'
import { Tabs } from 'nebula-react'
import { parse as parseQs, stringify as stringifyQs } from 'qs'

import Code from './Code'
import renderHTML from './utils/renderHTML'
import renderReact from './utils/renderReact'

const parseQuery = q => q.startsWith('?')
  ? parseQs(q.slice(1))
  : parseQs(q)

const handleTabChange = (type, tabId, history) => {
  const { search } = history.location
  const query = parseQuery(search)

  const key = `${type}ActiveTabId`
  query[key] = tabId

  history.push({
    search: stringifyQs(query)
  })
}

const getDefaultActiveTabId = (type, { location: { search } }) => {
  const query = parseQuery(search)

  if (query[`${type}ActiveTabId`]) {
    return query[`${type}ActiveTabId`]
  }

  return 'description'
}

const Source = ({
  type,
  extraString,
  description,
  options,
  children,
  nebulaImportOverride,
  componentNameOverride,
  history
}) => (
  <div>
    <Tabs.Wrapper
      activeId={getDefaultActiveTabId(type, history)}
      onChange={id => handleTabChange(type, id, history)}
    >
      <Tabs.TabList>
        { description ? <Tabs.Tab target="description">Description</Tabs.Tab> : null }
        { options ? <Tabs.Tab target="options">Options</Tabs.Tab> : null }
        <Tabs.Tab target="html">HTML code</Tabs.Tab>
        <Tabs.Tab target="react">React code (ES6)</Tabs.Tab>
      </Tabs.TabList>
      { description ? <Tabs.Panel id="description">{description}</Tabs.Panel> : null }
      { options ? <Tabs.Panel id="options">{options}</Tabs.Panel> : null }
      <Tabs.Panel id="html">
        <Code>
          { renderHTML(children) }
        </Code>
      </Tabs.Panel>
      <Tabs.Panel id="react">
        <Code
          componentName={type}
          nebulaImportOverride={nebulaImportOverride}
          extraString={extraString}
          language="jsx"
        >
          { renderReact(children, componentNameOverride) }
        </Code>
      </Tabs.Panel>
    </Tabs.Wrapper>
  </div>
)

Source.propTypes = {
  type: T.string.isRequired,
  history: T.shape({}).isRequired,
  extraString: T.string,
  description: T.node,
  options: T.node,
  nebulaImportOverride: T.string,
  componentNameOverride: T.shape({}),
  children: T.node.isRequired
}


export default withRouter(Source)
