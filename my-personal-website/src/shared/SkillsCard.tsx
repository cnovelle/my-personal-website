//Library Imports
import Card from "react-bootstrap/Card";

//App Imports
import "./SkillsCard.css";

interface SkillsProps {
  skill: string;
}

function SkillsCard(props: SkillsProps) {
  const { skill } = props;
  return (
    <Card id="card-background">
      <Card.Body>
        <p>{skill}</p>
      </Card.Body>
    </Card>
  );
}

export default SkillsCard;
