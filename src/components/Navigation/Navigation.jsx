import React, { Component } from "react";
import Logo from "../Logo/Logo";
import TopNavigation from "./TopNavigation/TopNavigation";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = {
    links: {
      Home: "/",
      Blog: "/blog",
    },
    hello: 111,
  };

  render() {
    return (
      <div>
        <Logo />
        <TopNavigation {...this.state.links} />
      </div>
    );
  }
}

export default Navigation;
