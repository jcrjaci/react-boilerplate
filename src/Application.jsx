import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';

const Application = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

export default Application;
