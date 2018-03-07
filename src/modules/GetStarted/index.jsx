import React from 'react'
import T from 'prop-types'
import { Tabs, Section, SiteWrap, FadeIn } from 'nebula-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { stringify as stringifyQs } from 'qs'


import { parseQuery } from 'utils'
import { BASE_PATH } from 'constants'

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
  <Section size="md">
    <SiteWrap padding>
      <h1><span style={{ verticalAlign: 'middle' }}>Get started with</span> <img src={`/src/assets/img/nebula-logo.svg`} alt="Nebula" style={{ maxWidth: '150px', height: 'auto', verticalAlign: 'middle' }} /></h1>
      <p>It is recommended that you read the <Link to={`${BASE_PATH}core-concepts`}>Core Concepts</Link> to get the most out of this framework.</p>
      <p>Please choose which version of Nebula you wish to consume in your project.</p>
      <Tabs.Wrapper
        activeId={getDefaultActiveTabId(history)}
        onChange={id => handleTabChange(id, history)}
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
        <Tabs.Panel id="css" className="u-nebula-bg">
          <FadeIn>
            <div>
              <NebulaCSS />
            </div>
          </FadeIn>
        </Tabs.Panel>
        <Tabs.Panel id="components" className="u-nebula-bg">
          <FadeIn>
            <div>
              <NebulaComponents />
            </div>
          </FadeIn>
        </Tabs.Panel>
        <Tabs.Panel id="react" className="u-nebula-bg">
          <FadeIn>
            <div>
              <NebulaReact />
            </div>
          </FadeIn>
        </Tabs.Panel>
      </Tabs.Wrapper>
    </SiteWrap>
    <CoreConcepts>
      <h2>Core Concepts</h2>
    </CoreConcepts>
  </Section>
)

GetStarted.propTypes = {
  history: T.shape({}).isRequired
}

export default withRouter(GetStarted)
