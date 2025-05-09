import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router";
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
const AppNavbar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
            Navbar
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
