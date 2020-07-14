import React, { Component } from "react";
import Navigation from "../components/Navigation";

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation settings={this.props.settings} />
        <div>This is the Blog</div>
      </React.Fragment>
    );
  }
}

export default Blog;
