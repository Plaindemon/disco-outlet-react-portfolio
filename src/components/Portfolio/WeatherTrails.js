import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import project1Image from "../../assets/images/weather-trails.gif";

function WeatherTrailsProject() {
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Img variant="top" src={project1Image} />
      <Card.Body>
        <Card.Title>Weather Trails</Card.Title>
        <Card.Text>
          Checks the weather and 5 day forecast and can search National Parks
          service for parks in each State
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {/* <ListGroup.Item>
          <Card.Link href="#">App Link</Card.Link>
        </ListGroup.Item> */}
        <ListGroup.Item>
          <Card.Link href="https://plaindemon.github.io/weather-trails">
            Github Link
          </Card.Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default WeatherTrailsProject;
