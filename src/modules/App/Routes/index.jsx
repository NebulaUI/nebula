import React from 'react'
import { Route } from 'react-router-dom'

import Home from 'modules/Home'
import Flag from 'modules/Flag'
import Navbar from 'modules/Navbar'
import BareList from 'modules/BareList'

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/objects/flag" component={Flag} />
    <Route exact path="/objects/bare-list" component={BareList} />
    <Route exact path="/components/navbar" component={Navbar} />
  </div>
)

export default Routes
