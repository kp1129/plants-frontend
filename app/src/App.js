import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Register from './components/forms/Register';
import Login from './components/forms/Login';
import Dashboard from './components/Dashboard';
// import Addplant from './components//forms/Addplant';

import './App.css';

const App = () => {
  return (
    <Router>
      {/* Links */}
      
      {/* Routes to render */}
      <Switch>
        
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Dashboard />
        </Route>
        <Route exact path="/home/addnew">
        {/* <Addplant /> */}
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
