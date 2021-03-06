import React from 'react'
import { withRouter } from 'react-router'
import T from 'prop-types'
import { Tabs, FadeIn } from 'nebula-react'
import { stringify as stringifyQs } from 'qs'

import { parseQuery } from 'utils'

import Code from './Code'
import renderHTML from './utils/renderHTML'
import renderReact from './utils/renderReact'

const ACTIVE_ID_KEY = 'ActiveTabId'

const handleTabChange = (type, tabId, history, tabsId) => {
  const { search } = history.location
  const query = parseQuery(search)

  const key = `${tabsId || type}${ACTIVE_ID_KEY}`
  query[key] = tabId

  history.push({
    search: stringifyQs(query)
  })
}

const getDefaultActiveTabId = (type, { location: { search } }, tabsId) => {
  const query = parseQuery(search)

  if (query[`${tabsId || type}${ACTIVE_ID_KEY}`]) {
    return query[`${tabsId || type}${ACTIVE_ID_KEY}`]
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
  codeOverride,
  htmlExampleOverride,
  tabsId,
  htmlExtraString,
  history
}) => (
  <div>
    <Tabs.Wrapper
      activeId={getDefaultActiveTabId(type, history, tabsId)}
      onChange={id => handleTabChange(type, id, history, tabsId)}
    >
      <Tabs.TabList>
        <Tabs.Tab disabled={!description} target="description">Description</Tabs.Tab>
        <Tabs.Tab disabled={!options} target="options">Options</Tabs.Tab>
        <Tabs.Tab target="html">HTML code</Tabs.Tab>
        <Tabs.Tab target="react">React code (ES6)</Tabs.Tab>
      </Tabs.TabList>
      { description
        ? (
          <Tabs.Panel id="description">
            <FadeIn>
              <div>{ description }</div>
            </FadeIn>
          </Tabs.Panel>
        ) : null
      }
      { options
        ? (
          <Tabs.Panel id="options">
            <FadeIn>
              <div>{ options }</div>
            </FadeIn>
          </Tabs.Panel>
        ) : null
      }
      <Tabs.Panel id="html">
        <FadeIn>
          <div>
            <Code htmlExtraString={htmlExtraString}>
              { renderHTML(htmlExampleOverride || codeOverride || children) }
            </Code>
          </div>
        </FadeIn>
      </Tabs.Panel>
      <Tabs.Panel id="react">
        <FadeIn>
          <div>
            <Code
              componentName={type}
              nebulaImportOverride={nebulaImportOverride}
              extraString={extraString}
              language="jsx"
            >
              { renderReact(codeOverride || children, componentNameOverride) }
            </Code>
          </div>
        </FadeIn>
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
  codeOverride: T.node,
  htmlExampleOverride: T.node,
  tabsId: T.string,
  htmlExtraString: T.string,
  children: T.node.isRequired
}


export default withRouter(Source)
