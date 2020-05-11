import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import components
import Register from "./components/forms/Register";
import Login from "./components/forms/Login";
import Dashboard from "./components/Dashboard";
import AddPlant from "./components//forms/AddPlant";
import UpdatePlant from './components/forms/UpdatePlant';

import "./App.css";

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
          <AddPlant />
        </Route>
        <Route path="/home/update/:id">
          <UpdatePlant />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
