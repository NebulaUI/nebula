import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from 'modules/Home'
import Flag from 'modules/Flag'
import Navbar from 'modules/Navbar'
import BareList from 'modules/BareList'
import GetStarted from 'modules/GetStarted'
import NotFound from 'modules/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/get-started" component={GetStarted} />
    <Route exact path="/objects/flag" component={Flag} />
    <Route exact path="/objects/bare-list" component={BareList} />
    <Route exact path="/components/navbar" component={Navbar} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
