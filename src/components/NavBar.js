import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function NavBarC() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Link to="/category/ninos">
            <Navbar.Brand>Niños</Navbar.Brand>
          </Link>{" "}
          <Link to="/category/jovenes">
            <Navbar.Brand>Jóvenes</Navbar.Brand>
          </Link>
          <Link to="/category/musicos">
            <Navbar.Brand>Musicos</Navbar.Brand>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}
