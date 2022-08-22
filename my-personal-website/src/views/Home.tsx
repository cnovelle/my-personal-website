//Library Imports
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

//App Imports
import "./Home.css";
import MyImage from "./AvatarTransparant.png";

export default function Home() {
  return (
    <section id="home" className="p-5">
      <Container
        fluid
        id="intro-container"
        className="d-flex justify-content-center"
      >
        <Col className="d-flex align-items-center justify-content-center flex-column">
          <Row>Hi, I'm Christian. And this is my website. </Row>
          <Row> This will be a quick intro or some fun facts</Row>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <img src={MyImage} width="70%" alt="Flowers in Chania" />
        </Col>
      </Container>
    </section>
  );
}
