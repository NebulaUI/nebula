import React from 'react'

import {
  SiteWrap,
  Section,
  Tabs,
  BareList,
  InlineList,
  MatrixList,
  UniformedList,
  Flag
} from 'nebula-react'

import ComponentExample from './components/ComponentExample'

const App = () => (
  <div>
    <Section size="md">
      <SiteWrap padding>
        <h1>Nebula React</h1>
        <h2>Bare List</h2>
        <ComponentExample>
          <Flag.Wrapper align="top" reverse>
            <Flag.Component>
              Component
            </Flag.Component>
            <Flag.Body>
              Body
            </Flag.Body>
          </Flag.Wrapper>
        </ComponentExample>
      </SiteWrap>
    </Section>
  </div>
)

export default App
