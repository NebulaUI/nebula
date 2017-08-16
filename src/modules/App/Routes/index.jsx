import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { basePath } from 'utils/constants'
import Home from 'modules/Home'
import Flag from 'modules/Flag'
import Navbar from 'modules/Navbar'
import Lists from 'modules/Lists'
import Grid from 'modules/Grid'
import Card from 'modules/Card'
import SiteWrap from 'modules/SiteWrap'
import Section from 'modules/Section'
import GetStarted from 'modules/GetStarted'
import NotFound from 'modules/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path={`${basePath}`} component={Home} />
    <Route exact path={`${basePath}get-started`} component={GetStarted} />
    <Route exact path={`${basePath}objects/flag`} component={Flag} />
    <Route exact path={`${basePath}objects/lists`} component={Lists} />
    <Route exact path={`${basePath}objects/grid`} component={Grid} />
    <Route exact path={`${basePath}objects/site-wrap`} component={SiteWrap} />
    <Route exact path={`${basePath}objects/section`} component={Section} />
    <Route exact path={`${basePath}components/navbar`} component={Navbar} />
    <Route exact path={`${basePath}components/card`} component={Card} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
