import React from 'react'
import { SiteWrap, Section } from 'nebula-react'

import Flag from './modules/Flag'

const App = () => (
  <div>
    <Section size="md">
      <SiteWrap padding>
        <h1>Nebula React</h1>
        <Flag />
      </SiteWrap>
    </Section>
  </div>
)

export default App
