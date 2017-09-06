import React from 'react'
import T from 'prop-types'
import { Tabs, Section } from 'nebula-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { stringify as stringifyQs } from 'qs'


import { parseQuery } from 'utils'
import { basePath } from 'utils/constants'

import CoreConcepts from '../CoreConcepts'
import NebulaCSS from './NebulaCSS/'
import NebulaComponents from './NebulaComponents'
import NebulaReact from './NebulaReact'

const ACTIVE_ID_KEY = 'activeTabId'

const handleTabChange = (tabId, history) => {
  const { search } = history.location
  const query = parseQuery(search)

  query[ACTIVE_ID_KEY] = tabId

  history.push({
    search: stringifyQs(query)
  })
}

const getDefaultActiveTabId = ({ location: { search } }) => {
  const query = parseQuery(search)

  if (query[ACTIVE_ID_KEY]) {
    return query[ACTIVE_ID_KEY]
  }

  return 'css'
}

const GetStarted = ({ history }) => (
  <div>
    <h1>Get started</h1>
    <p>It is recommended that you read the <Link to={`${basePath}core-concepts`}>Core Concepts</Link>
      to get the most out of this framework.</p>
    <p>Please choose which version of Nebula you wish to consume in your project.</p>
    <Tabs.Wrapper
      activeId={getDefaultActiveTabId(history)}
      onTabChange={id => handleTabChange(id, history)}
    >
      <Tabs.TabList>
        <Tabs.Tab target="css">
          Nebula CSS
        </Tabs.Tab>
        <Tabs.Tab target="components">
          Nebula Components
        </Tabs.Tab>
        <Tabs.Tab target="react">
          Nebula React
        </Tabs.Tab>
      </Tabs.TabList>
      <Tabs.Panel id="css">
        <NebulaCSS />
      </Tabs.Panel>
      <Tabs.Panel id="components">
        <NebulaComponents />
      </Tabs.Panel>
      <Tabs.Panel id="react">
        <NebulaReact />
      </Tabs.Panel>
    </Tabs.Wrapper>
    <Section size="md">
      <CoreConcepts>
        <h2>Core Concepts</h2>
      </CoreConcepts>
    </Section>
  </div>
)

GetStarted.propTypes = {
  history: T.shape({}).isRequired
}

export default withRouter(GetStarted)
