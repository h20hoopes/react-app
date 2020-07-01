import React, { Component } from "react";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import { Blog, Home } from "../pages/Pages";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  HashRouter,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
      </HashRouter>
    );
  }
}

export default App;
