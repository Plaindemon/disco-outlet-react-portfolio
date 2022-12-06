import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import project3Image from "../../assets/images//noname.jpg";

import "./Portfolio.css";

function RoutesProject() {
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Img variant="top" src={project3Image} />
      <Card.Body>
        <Card.Title className="work-title">Routes</Card.Title>
        <Card.Text>Ski, Snowboard, Run with friends!</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Card.Link href="https://glowing-sporky-routes.herokuapp.com/">
            App Link
          </Card.Link>
        </ListGroup.Item>
        <ListGroup.Item><Card.Link href="https://github.com/brotherson67/glowing-spork">
            Github Link
          </Card.Link></ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default RoutesProject;
