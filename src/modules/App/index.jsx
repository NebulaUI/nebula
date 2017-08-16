import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Section, SiteWrap } from 'nebula-react'

import Nav from './Navigation'
import Routes from './Routes'
import routesModel from './Navigation/model'

const App = () => (
  <Router>
    <div>
      <Nav routes={routesModel} />
      <SiteWrap padding>
        <Section size="md">
          <Routes />
        </Section>
      </SiteWrap>
    </div>
  </Router>
)

export default App
