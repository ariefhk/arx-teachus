import React from "react";
import "./hero.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Header } from "../../assets";

function index() {
  return (
    <Container
      id="hero"
      className="rounded"
      style={{ backgroundColor: "rgba(0, 118, 117, 0.05)" }}
    >
      <Row className="align-items-center ps-5">
        <Col>
          <h1 className="hero-title">
            Find The Best Courses &{" "}
            <span style={{ color: "rgba(0, 118, 117, 1)" }}>Become Master</span>
          </h1>
          <p className="pt-2">
            Online learning is the future of education.
            <br /> Upgrade your skills right now with online learning!
          </p>
          <div className="d-flex gap-3 pt-5">
            <Button className="p-2 hero-btn-start">Start Learning</Button>
            <Button className="p-2 hero-btn-instructor">
              Become an Instructor test 23
            </Button>
          </div>
        </Col>
        <Col>
          <Image src={Header} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default index;
