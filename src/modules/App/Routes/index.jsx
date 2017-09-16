import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { BASE_PATH } from 'utils/constants'
import Home from 'modules/Home'
import Flag from 'modules/Flag'
import Navbar from 'modules/Navbar'
import Lists from 'modules/Lists'
import Grid from 'modules/Grid'
import Card from 'modules/Card'
import SiteWrap from 'modules/SiteWrap'
import Section from 'modules/Section'
import Tabs from 'modules/Tabs'
import Foldable from 'modules/Foldable'
import Form from 'modules/Form'
import Buttons from 'modules/Buttons'
import Flyout from 'modules/Flyout'
import Icons from 'modules/Icons'
import Modal from 'modules/Modal'

import GetStarted from 'modules/GetStarted'
import CoreConcepts from 'modules/CoreConcepts'
import NotFound from 'modules/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path={`${BASE_PATH}`} component={Home} />
    <Route exact path={`${BASE_PATH}get-started`} component={GetStarted} />
    <Route exact path={`${BASE_PATH}core-concepts`} component={CoreConcepts} />
    <Route exact path={`${BASE_PATH}objects/flag`} component={Flag} />
    <Route exact path={`${BASE_PATH}objects/lists`} component={Lists} />
    <Route exact path={`${BASE_PATH}objects/grid`} component={Grid} />
    <Route exact path={`${BASE_PATH}objects/site-wrap`} component={SiteWrap} />
    <Route exact path={`${BASE_PATH}objects/section`} component={Section} />
    <Route exact path={`${BASE_PATH}components/navbar`} component={Navbar} />
    <Route exact path={`${BASE_PATH}components/card`} component={Card} />
    <Route exact path={`${BASE_PATH}components/tabs`} component={Tabs} />
    <Route exact path={`${BASE_PATH}components/foldable`} component={Foldable} />
    <Route exact path={`${BASE_PATH}components/form`} component={Form} />
    <Route exact path={`${BASE_PATH}components/buttons`} component={Buttons} />
    <Route exact path={`${BASE_PATH}components/flyout`} component={Flyout} />
    <Route exact path={`${BASE_PATH}components/icons`} component={Icons} />
    <Route exact path={`${BASE_PATH}components/Modal`} component={Modal} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
