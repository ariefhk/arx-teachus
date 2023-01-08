import React from "react";
import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
import "./navbar.css";

function index() {
  const navbarMenu = [
    {
      name: "Course",
      path: "course",
    },
    {
      name: "Categories",
      path: "categories",
    },
    {
      name: "About",
      path: "about",
    },
  ];

  return (
    <Navbar id="navbar" expand="lg">
      <Container>
        <Navbar.Brand href={`home`} className="navbar-logo">
          TeachUs.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto nav-link">
            {navbarMenu.map((menu) => (
              <Nav.Link href={menu.path} key={menu.name}>
                {menu.name}
              </Nav.Link>
            ))}
          </Nav>
          <div className="d-flex gap-3">
            {/* <Col>
            </Col> */}
            <Button className="navbar-btn-login">Login</Button>
            {/* <Col>
            </Col> */}
            <Button className="navbar-btn-join">Join Now</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default index;
