import React, { Component } from "react";
import "../bootstrap-4.5.0-dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Child extends Component {
  render() {
    const navigation = this.props.settings.navigationItems;

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse>
          <Nav className="mr-auto">
            {navigation.map((listItem) =>
              listItem.sublinks.length > 0 ? ( // if there are sublinks ie needs dropdown
                <NavDropdown
                  title={listItem.name}
                  id="basic-nav-dropdown"
                  key={listItem.name}
                >
                  {listItem.sublinks.map((sublink) => (
                    <NavDropdown.Item
                      className="dropdown-item"
                      href={sublink.link}
                      key={sublink.name}
                    >
                      {sublink.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                // else
                <Nav.Link
                  className="nav-item"
                  href={listItem.link}
                  key={listItem.name}
                >
                  {listItem.name}
                </Nav.Link>
              )
            )}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Child;
