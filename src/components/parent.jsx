import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  render() {
    return (
      <React.Fragment>
        <Child settings={this.props.settings} />
      </React.Fragment>
    );
  }
}

export default Parent;
