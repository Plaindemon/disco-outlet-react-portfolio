import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Ben from "../../assets/images/ben.jpg";

function AboutMe() {
  return (
    <Card style={{ width: "20rem" }} className="about-modal">
      <Card.Img variant="top" src={Ben} />
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          {" "}
          Full stack web developer with experience in HTML, javascript, react as
          well as experience outside the web development field in anthropology,
          psychology, science such as biology and chemistry, as well as
          experience in sales, customer service, art/ceramics and many other
          fields.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Card.Link href="https://www.codecademy.com/profiles/benjaminChaplin7948211806/certificates/705dcb15de0da4dd9d9fc4f3274b430e">
            Javascript
          </Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>Angular</ListGroup.Item>
        <ListGroup.Item>Typescript</ListGroup.Item>
      </ListGroup>

    </Card>
  );
}

export default AboutMe;
