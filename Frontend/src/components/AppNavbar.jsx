import React from "react";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router";
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "react-bootstrap";
import App from "../App";
const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            App
          </Nav.Link>
          <Nav.Link as={NavLink} to="/AboutMe">
          About Me
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
