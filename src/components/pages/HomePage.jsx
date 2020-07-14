import React, { Component } from "react";
import Navigation from "../components/Navigation";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation settings={this.props.settings} />
        <div>This is the Home Page</div>
      </React.Fragment>
    );
  }
}

export default HomePage;
