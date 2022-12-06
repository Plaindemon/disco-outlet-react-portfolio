import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import project4Image from "../../assets/images/Blog.png";

function RobotRent() {
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Img variant="top" src={project4Image} />
      <Card.Body>
        <Card.Title>Robot Rent</Card.Title>
        <Card.Text>Blog with login and posting capabilities</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Card.Link href="#">App Link</Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Card.Link href="#">Github Link</Card.Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default RobotRent;
