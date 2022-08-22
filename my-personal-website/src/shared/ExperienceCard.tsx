//Library Imports
import Accordion from "react-bootstrap/Accordion";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

//App Imports
import "./ExperienceCard.css";

interface ExperienceProps {
  company: string;
  position: string;
  dates: string;
  description: string;
}

function ExperienceCard(props: ExperienceProps) {
  const { company, position, dates, description } = props;
  return (
    <Accordion id="accordion-test" flush>
      <Accordion.Item id="accordion-test" eventKey="0">
        <Accordion.Header id="accordion-test" className="d-flex">
          <Col>
            <Row>{company}</Row>
            <Row>{position}</Row>
          </Col>
          <Col>{dates}</Col>
        </Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ExperienceCard;
