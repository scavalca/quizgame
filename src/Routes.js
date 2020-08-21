import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/game" exact component={Game} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
