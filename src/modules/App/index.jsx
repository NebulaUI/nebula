import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './Navigation'
import ScrollToTop from './ScrollToTop'
import Routes from './Routes'
import routesModel from './Navigation/model'

const App = () => (
  <Router>
    <ScrollToTop>
      <Nav routes={routesModel} />
      <Routes />
    </ScrollToTop>
  </Router>
)

export default App
