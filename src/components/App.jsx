import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import settings from "../settings.json";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  HashRouter,
} from "react-router-dom";

class App extends Component {
  state = { settings };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/blog">
            <Blog settings={this.state.settings} />
          </Route>
          <Route path="/">
            <HomePage settings={this.state.settings} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
