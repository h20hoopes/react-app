import React, { Component } from "react";
import Parent from "./parent";
import settings from "../settings.json";

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect,
//   HashRouter,
// } from "react-router-dom";

class App extends Component {
  state = { settings };
  render() {
    return <Parent settings={this.state.settings} />;
  }
}

export default App;
