import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import MyImage from "./code-img.png";

export default function About() {
  return (
    <section id="about">
      <Container fluid>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <h5>Hi, I'm Christian. And this is my website. </h5>
            <p> This will be a quick intro or some fun facts</p>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <img src={MyImage} alt="Flowers in Chania" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
