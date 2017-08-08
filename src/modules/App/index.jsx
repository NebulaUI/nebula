import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Section, SiteWrap } from 'nebula-react'

import Navigation from './Navigation'
import Routes from './Routes'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <SiteWrap>
        <Section>
          <Routes />
        </Section>
      </SiteWrap>
    </div>
  </Router>
)

export default App
