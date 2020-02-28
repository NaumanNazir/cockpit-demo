import React from 'react';
import { Route, Switch } from 'react-router-dom';
import System from './pages/System';
import Logs from './pages/Logs';
import Networking from './pages/Networking';


function Routes() {
  return (
    <Switch>
      <Route exact path="/system" component={ System } />
      <Route exact path="/logs" component={ Logs } />
      <Route exact path="/networking" component={ Networking } />
      <Route exact path="/" component={ System } />
      <Route exact path="/" component={ System } />
      <Route exact path="/" component={ System } />
      <Route exact path="/" component={ System } />
    </Switch>
  );
}

export default Routes;
