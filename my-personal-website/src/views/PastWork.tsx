import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import ExperienceCard from "../shared/ExperienceCard";

function PastWork() {
  return (
    <section id="past-work">
      <Container fluid>
        <Row className="mx-3">
          <ExperienceCard
            company="VMWare"
            position="Software Engineer Intern"
            dates="Jun-Aug"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          />
        </Row>
      </Container>
    </section>
  );
}

export default PastWork;
