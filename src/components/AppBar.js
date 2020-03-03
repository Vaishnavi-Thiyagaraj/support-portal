import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import InputGroup from 'react-bootstrap/InputGroup';
const AppBar = function () {
  return (<Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">
      <img
        src="/pngkey.com-ntsc-logo-png-3816603.png"
        width="100"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link>Products</Nav.Link>
        <Nav.Link>Training</Nav.Link>
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item as="div">Service Request Management</NavDropdown.Item>
          <NavDropdown.Item>Manage Your Service Request</NavDropdown.Item>
          <NavDropdown.Item>Manage Your RMAs</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          <NavDropdown.Item as="div">Resources</NavDropdown.Item>
          <NavDropdown.Item>Contact Support</NavDropdown.Item>
          <NavDropdown.Item>Product Warranty</NavDropdown.Item>
        </NavDropdown>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FontAwesome icon="search" name="search" />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="Search here.."
            name="searchBox"
            style={{ height: "auto" }}
          />
        </InputGroup>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);

}
export default AppBar;