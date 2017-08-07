import React from 'react'
import { SiteWrap, Section } from 'nebula-react'

import Flag from '../Flag/index'
import Navbar from '../Navbar/index'

const App = () => (
  <div>
    <Section size="md">
      <SiteWrap padding>
        <h1>Nebula React</h1>
        <Flag />
      </SiteWrap>
    </Section>
    <Section size="md">
      <SiteWrap padding>
        <Navbar />
      </SiteWrap>
    </Section>
  </div>
)

export default App
