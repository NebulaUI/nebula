import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Routes from './Routes'

import Home from '../Home'
import Flag from '../Flag'
import Navbar from '../Navbar'

const App = () => (
  <Router>
    <div>
      <Routes />
      <h1>Welcome to Nebula</h1>

      <Route exact path="/" component={Home} />
      <Route exact path="/objects/flag" component={Flag} />
      <Route exact path="/components/navbar" component={Navbar} />
    </div>
  </Router>
)

export default App
