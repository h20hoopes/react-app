import React, { Component } from "react";
import logo from "../../content/images/logo.png";

class Logo extends Component {
  state = {};

  render() {
    return (
      <div>
        <header
          className="w3-row w3-padding-16 w3-hide-small w3-white one-edge-shadow"
          style={{ zIndex: 2 }}
        >
          <div style={{ margin: "auto" }}>
            <a href="../index.html">
              <img
                className="w3-image"
                style={{
                  margin: "auto",
                  maxWidth: "50%",
                  display: "block",
                  maxHeight: 50,
                }}
                src={logo}
              />
            </a>
          </div>
        </header>

        <header className="w3-row w3-padding-16 w3-mobile w3-white one-edge-shadow w3-hide-medium w3-hide-large">
          <div style={{ margin: "auto" }}>
            <a href="../index.html\">
              <img
                className="w3-image"
                style={{
                  margin: "auto",
                  maxWidth: "50%",
                  display: "block",
                  maxHeight: 50,
                }}
                src={logo}
              />
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Logo;
