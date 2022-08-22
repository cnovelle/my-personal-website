import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
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
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="d-flex">
          <Col>{company}</Col>
          <Col>{dates}</Col>
          {position}
        </Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ExperienceCard;
