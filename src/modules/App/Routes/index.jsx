import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { BASE_PATH } from 'constants/index'
import Home from 'modules/Home'

import Flag from 'modules/Flag'
import Navbar from 'modules/Navbar'
import Lists from 'modules/Lists'
import Grid from 'modules/Grid'
import Card from 'modules/Card'
import SiteWrap1 from 'modules/SiteWrap'
import Section1 from 'modules/Section'
import Tabs from 'modules/Tabs'
import Foldable from 'modules/Foldable'
import Form from 'modules/Form'
import Buttons from 'modules/Buttons'
import Flyout from 'modules/Flyout'
import Icons from 'modules/Icons'
import Modal from 'modules/Modal'
import ComponentsLists from 'modules/ComponentsLists'
import Pagination from 'modules/Pagination'
import Pill from 'modules/Pill'
import ProgressBar from 'modules/ProgressBar'
import Table from 'modules/Table'
import Toast from 'modules/Toast'
import Tooltip from 'modules/Tooltip'
import Utilities from 'modules/Utilities'
import UtilityClasses from 'modules/UtilityClasses'
import SassVariables from 'modules/SassVariables'

import GetStarted from 'modules/GetStarted'
import CoreConcepts from 'modules/CoreConcepts'
import NotFound from 'modules/NotFound'
import API from '../API'

const Objects = (
  <div>
    <Route exact path={`${BASE_PATH}api/objects/flag`} component={Flag} />
    <Route exact path={`${BASE_PATH}api/objects/lists`} component={Lists} />
    <Route exact path={`${BASE_PATH}api/objects/grid`} component={Grid} />
    <Route exact path={`${BASE_PATH}api/objects/site-wrap`} component={SiteWrap1} />
    <Route exact path={`${BASE_PATH}api/objects/section`} component={Section1} />
  </div>
)

const Components = (
  <div>
    <Route exact path={`${BASE_PATH}api/components/navbar`} component={Navbar} />
    <Route exact path={`${BASE_PATH}api/components/card`} component={Card} />
    <Route exact path={`${BASE_PATH}api/components/tabs`} component={Tabs} />
    <Route exact path={`${BASE_PATH}api/components/foldable`} component={Foldable} />
    <Route exact path={`${BASE_PATH}api/components/form`} component={Form} />
    <Route exact path={`${BASE_PATH}api/components/buttons`} component={Buttons} />
    <Route exact path={`${BASE_PATH}api/components/flyout`} component={Flyout} />
    <Route exact path={`${BASE_PATH}api/components/icons`} component={Icons} />
    <Route exact path={`${BASE_PATH}api/components/modal`} component={Modal} />
    <Route exact path={`${BASE_PATH}api/components/lists`} component={ComponentsLists} />
    <Route exact path={`${BASE_PATH}api/components/pagination`} component={Pagination} />
    <Route exact path={`${BASE_PATH}api/components/pill`} component={Pill} />
    <Route exact path={`${BASE_PATH}api/components/progress-bar`} component={ProgressBar} />
    <Route exact path={`${BASE_PATH}api/components/table`} component={Table} />
    <Route exact path={`${BASE_PATH}api/components/toast`} component={Toast} />
    <Route exact path={`${BASE_PATH}api/components/tooltip`} component={Tooltip} />
    <Route exact path={`${BASE_PATH}api/components/utilities`} component={Utilities} />
  </div>
)

const UtilityClassesRoute = (
  <div>
    <Route exact path={`${BASE_PATH}api/utility-classes`} component={UtilityClasses} />
  </div>
)

const SassVariablesRoute = (
  <div>
    <Route exact path={`${BASE_PATH}api/sass-variables`} component={SassVariables} />
  </div>
)

const Routes = () => (
  <Switch>
    <Route exact path={`${BASE_PATH}`} component={Home} />
    <Route exact path={`${BASE_PATH}get-started`} component={GetStarted} />
    <Route exact path={`${BASE_PATH}core-concepts`} component={CoreConcepts} />
    <Route path={`${BASE_PATH}api`} component={API} />
    <Route component={NotFound} />
  </Switch>
)

export { Objects, Components, UtilityClassesRoute, SassVariablesRoute }

export default Routes
