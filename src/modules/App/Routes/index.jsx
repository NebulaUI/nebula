import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { basePath } from 'utils/constants'
import Home from 'modules/Home'
import Flag from 'modules/Flag'
import Navbar from 'modules/Navbar'
import BareList from 'modules/BareList'
import GetStarted from 'modules/GetStarted'
import NotFound from 'modules/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path={`${basePath}`} component={Home} />
    <Route exact path={`${basePath}get-started`} component={GetStarted} />
    <Route exact path={`${basePath}objects/flag`} component={Flag} />
    <Route exact path={`${basePath}objects/bare-list`} component={BareList} />
    <Route exact path={`${basePath}components/navbar`} component={Navbar} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
