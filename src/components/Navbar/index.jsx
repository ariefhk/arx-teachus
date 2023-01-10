import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import "./navbar.css";
import { Shopping, Search } from "../../assets";

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
          <div className="d-flex gap-3 ">
            <Row className="gap-3 align-items-center">
              <Col lg="2">
                <Image src={Search} />
              </Col>
              <Col lg="2">
                <Image src={Shopping} />
              </Col>
            </Row>
            <div style={{ borderLeft: "1.5px solid rgba(0, 0, 0, 0.1)" }}></div>
            <Button className="navbar-btn-login">Login</Button>
            <Button className="navbar-btn-join">Join Now</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default index;
