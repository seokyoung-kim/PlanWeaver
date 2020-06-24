import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Install from './components/Install';

const App = () => {
  return (
    <div>
    <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/install">Install</NavLink></li>
    </ul>
      <Switch>
        <Route exact path="/" component={Main} > </Route>
        <Route path="/about" component={About} ></Route>
        <Route path="/install" component={Install} ></Route>
      </Switch>
    </div>
  )
}

export default App;