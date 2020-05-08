import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import components
import Register from "./components/forms/Register";
import Login from "./components/forms/Login";
import Dashboard from "./components/Dashboard";
import AddPlant from "./components//forms/AddPlant";

// import plant images
// import plant1 from "./images/plant1.jpg";
// import plant2 from "./images/plant2.jpg";
// import plant3 from "./images/plant3.jpg";
// import plant4 from "./images/plant4.jpg";
// import plant5 from "./images/plant5.jpg";
// import plant6 from "./images/plant6.jpg";

import "./App.css";

const App = () => {
  // const plantImages = [
  //   { tile: 1, src: plant1, selected: false, alt: "plant with flowers - variant 1" },
  //   { tile: 2, src: plant2, selected: false, alt: "plant with leaves - variant 1" },   
  //   { tile: 3, src: plant3, selected: false, alt: "succulent - variant 1" },
  //   { tile: 4, src: plant4, selected: false, alt: "plant with leaves - variant 2" },
  //   { tile: 5, src: plant5, selected: false, alt: "plant with flowers - variant 2" },
  //   { tile: 6, src: plant6, selected: false, alt: "succulent - variant 2"},
  // ];
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
      </Switch>
    </Router>
  );
};

export default App;
