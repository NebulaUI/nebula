import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Section, SiteWrap } from 'nebula-react'

import Routes from './Routes'

import Home from '../Home'
import Flag from '../Flag'
import Navbar from '../Navbar'
import BareList from '../BareList'

const App = () => (
  <Router>
    <div>
      <Routes />

      <Section className="u-hard-bottom">
        <SiteWrap>
          <h1>Welcome to Nebula</h1>
        </SiteWrap>
      </Section>

      <Route exact path="/" component={Home} />
      <Route exact path="/objects/flag" component={Flag} />
      <Route exact path="/objects/bare-list" component={BareList} />
      <Route exact path="/components/navbar" component={Navbar} />
    </div>
  </Router>
)

export default App
