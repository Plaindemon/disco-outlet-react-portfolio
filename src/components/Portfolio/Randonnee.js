import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import project2Image from "../../assets/images/project-2.jpeg";

function RandonneeProject() {
  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src={project2Image} />
      <Card.Body>
        <Card.Title>Randonnee</Card.Title>
        <Card.Text>
        Climb with friends!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Card.Link href="#">
            App Link
          </Card.Link>
        </ListGroup.Item>
        <ListGroup.Item><Card.Link href="https://github.com/Plaindemon/greenberry">
            Github Link
          </Card.Link></ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default RandonneeProject;