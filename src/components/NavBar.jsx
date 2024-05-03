import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./NavBar.css";
const NavBar = () => {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   Cookies.remove("token"); // Remove token from cookies
  //   navigate("/login"); // Redirect to login page after logout
  // };
  return (
    <Navbar expand="lg" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Placement <span className="subbrand">Buddy</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Batch">
              <NavDropdown.Item as={Link} to="/previous">
                2023-Batch
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/present">
                2024-Batch
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" >
              About
            </Nav.Link>
            <Nav.Link  as={Link} to="/contact" >
              Contact
            </Nav.Link>
            {/* <Nav.Link onClick={handleLogout}>
              Logout
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
