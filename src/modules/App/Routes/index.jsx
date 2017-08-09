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
    <Route exact path="/nebula/" component={Home} />
    <Route exact path="/nebula/get-started" component={GetStarted} />
    <Route exact path="/nebula/objects/flag" component={Flag} />
    <Route exact path="/nebula/objects/bare-list" component={BareList} />
    <Route exact path="/nebula/components/navbar" component={Navbar} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
