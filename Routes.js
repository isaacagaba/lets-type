import React from "react";
import { Router, Route, IndexRoute } from 'react-router';
import Game from './js/components/Game'
import AppWrapper from './js/components/AppWrapper'
import PastGamesContainer from "./js/containers/PastGamesContainer";
import About from "./js/components/About";

export default (history) => (_) => {
  return(
    <Router history={history}>
      <Route path="/" component={AppWrapper}>
        <IndexRoute component={Game} />
        <Route path="/play" component={Game} />
        <Route path="/pastGames" component={PastGamesContainer} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  )
}
