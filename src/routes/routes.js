import React from 'react'
import { IndexRoute, Route } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import NotFound from '../components/notFound/NotFound'
import DashboardContainer from '../containers/DashboardContainer'
import Workspace from '../pages/workspace/Workspace'

const routes = (
  <Route path="/">
    <Route component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="/dashboard" component={DashboardContainer} />
      <Route path="/workspace" component={Workspace} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
)

export default routes