import React from "react";
import "./index.css";
import Home from "./components/Home"
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import Tests from "./components/Tests";
import WriteUp from "./components/WriteUp";


function App() {
  return (
    <main>
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/tests" component={Tests} />
        <Route path="/writeup" component={WriteUp} />
        <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
