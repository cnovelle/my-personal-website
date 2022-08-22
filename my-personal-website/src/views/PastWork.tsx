//Library Imports
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

//App Imports
import ExperienceCard from "../shared/ExperienceCard";
import Experience from "../info/Experience.json";

function PastWork() {
  return (
    <section id="past-work" className="p-5">
      <Container fluid>
        <Row className="pb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-person-workspace"
            viewBox="0 0 16 16"
          >
            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
          </svg>
          <p className="h1">Past Experience</p>
          <p className="fs-4">
            These are some of the places I have gotten to work at!
          </p>
        </Row>
        <Row>
          {Experience.map((experience) => {
            return (
              <div className="py-3">
                <ExperienceCard
                  company={experience.company}
                  position={experience.position}
                  dates={experience.dates}
                  description={experience.description}
                />
              </div>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default PastWork;
