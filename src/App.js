import React from 'react'
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import Home from './component/home/Home';
import Errorpage from './component/404page/404page';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Errorpage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

