import React from 'react'
import { Tabs, Section } from 'nebula-react'
import { Link } from 'react-router-dom'

import { basePath } from 'utils/constants'
import MarkdownContainer from 'components/MarkdownContainer'
import CoreConcepts from '../CoreConcepts'
import NebulaCSS from './NebulaCSS/'
import nebulaComponents from './nebula-components.md'

const GetStarted = () => (
  <div>
    <h1>Get started</h1>
    <p>It is recommended that you read the <Link to={`${basePath}core-concepts`}>Core Concepts</Link> to get the most out of this framework.</p>
    <p>Please choose which version of Nebula you wish to consume in your project.</p>
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
      <Tabs.Panels>
        <Tabs.Panel>
          <NebulaCSS />
        </Tabs.Panel>
        <Tabs.Panel>
          <MarkdownContainer source={nebulaComponents} />
        </Tabs.Panel>
        <Tabs.Panel>
          <code>yarn add nebula-react</code>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs.Wrapper>
    <Section size="md">
      <CoreConcepts>
        <h2>Core Concepts</h2>
      </CoreConcepts>
    </Section>
  </div>
)

export default GetStarted
