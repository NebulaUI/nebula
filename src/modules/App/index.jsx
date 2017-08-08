import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Section, SiteWrap } from 'nebula-react'

import Navigation from './Navigation'
import Routes from './Routes'

const App = () => (
  <Router>
    <div>
      <Navigation />

      <Section className="u-hard-bottom">
        <SiteWrap>
          <h1>Welcome to Nebula</h1>
        </SiteWrap>
      </Section>
      <Routes />
    </div>
  </Router>
)

export default App
