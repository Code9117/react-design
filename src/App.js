import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import RouteCommon from './pages/RouteCommon';
import HomeContainer from './pages/home';
import MenberContainer from './pages/menber';

import { urls } from './services';

const formRoutes = [
  {
    path: urls.home, component: HomeContainer,
  },
  {
    path: urls.menber, component: MenberContainer
  }
]

const AppContainer = () => {

  return (
    <>
      <Switch>
        {
          formRoutes.map((config) => (
            <Route key={config.path} path={config.path} exact={config.exact === true} render={(routeProps) => (
              <RouteCommon {...routeProps} />
            )} />
          ))
        }
        <Redirect from="*" to={urls.home} />
      </Switch>
    </>
  )
}

export default memo(AppContainer);
