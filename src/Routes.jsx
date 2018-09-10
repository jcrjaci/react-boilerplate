import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';

export default (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/coins/:page([0-9]*)" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);
