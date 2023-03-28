import React, { useState } from "react";
import {
  Card,
  CardGroup,
  Button,
  ListGroup,
  ListItem,
  Col,
  Accordion,
} from "react-bootstrap";
// import { Container } from "../Footer/FooterStyles";
import resumePdf from "../../assets/pdf/Ben-Resume-2023.pdf";

import "./resume.css";

function Resume() {
  return (
    <div className="resume-div-outer">
      <Button id="print" type="button" className="btn button">
        <a href={resumePdf} className="button-style">
          Print PDF
        </a>
      </Button>
      <div></div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Education: </Accordion.Header>
          <Accordion.Body>
            <Col>
              <Card className="resume-section" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title className="resume-head">Education: </Card.Title>
                  <ListGroup className="resume-box" variant="flush">
                    <ListGroup.Item>
                      Certificate, Full Stack Web Development{" "}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      University of Utah - Salt Lake City, UT
                    </ListGroup.Item>
                    <ListGroup.Item>August 2021 - February 2022</ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="resume-box" variant="flush">
                    <ListGroup.Item>Bachelor's in Science</ListGroup.Item>
                    <ListGroup.Item>
                      Utah State University - Logan, UT
                    </ListGroup.Item>
                    <ListGroup.Item>August 2013 to May 2019</ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="resume-box" variant="flush">
                    <ListGroup.Item>Minor in Anthropology</ListGroup.Item>
                    <ListGroup.Item>
                      Utah State University - Logan, UT
                    </ListGroup.Item>
                    <ListGroup.Item>August 2013 to May 2019</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Work History:</Accordion.Header>
          <Accordion.Body>
            <Col>
              <Card className="resume-section" style={{ width: "100%" }}>
                <Card.Header className="resume-head">
                  Company 1: Ken Garff Automotive Group
                </Card.Header>

                <Card.Body className="resume-box">
                  <Card.Title className="resume-head">
                    {" "}
                    Years worked (2019-2020)
                  </Card.Title>
                  <Card.Title className="resume-head">
                    Responsibilities:{" "}
                  </Card.Title>
                  <ListGroup className="resume-box" variant="flush">
                    <ListGroup.Item>
                      • Increased individual sales progressively each month by
                      20%
                    </ListGroup.Item>
                    <ListGroup.Item>
                      • Collaborated with a team of 15 people to increase
                      departments sales above goals consistently each month
                    </ListGroup.Item>
                    <ListGroup.Item>
                      • Managed time proficiently to make more sales inquiries
                      and bring in more potential clientele{" "}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      • Created returning clients and lifetime customers by
                      using quality service and communication skills
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="resume-section" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Header className="resume-head">
                    Company 2: Michael Kors
                  </Card.Header>
                  <Card.Body className="resume-box">
                    <Card.Title className="resume-head">
                      Years worked (2016-2018)
                    </Card.Title>

                    <Card.Title className="resume-head">
                      Responsibilities:{" "}
                    </Card.Title>
                    <ListGroup className="resume-box" variant="flush">
                      <ListGroup.Item>
                        {" "}
                        • Created innovative backroom organization for quick
                        refilling and easy inventory management of new products
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        • Each month I individually sold between 30-40% of the
                        stores monthly sales
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        • Top 3 in sales performance every month throughout my
                        two years at the store
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        • Created displays to increase the sales of both new and
                        old product in the store
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card.Body>
              </Card>
              <Card className="resume-section" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Header className="resume-head">
                    Company 3: Rover (Pet care mobile app){" "}
                  </Card.Header>
                  <Card.Title className="resume-head">
                    Years worked (2009-2022)
                  </Card.Title>

                  <Card.Title className="resume-head">
                    Responsibilities:{" "}
                  </Card.Title>
                  <ListGroup className="resume-box" variant="flush">
                    <ListGroup.Item>
                      {" "}
                      • Grew a successful small business with over 30 clients
                      within few months time
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      • Accumulated a 5 star customer satisfaction rate with
                      over ten profile reviews
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      • Maintained long term customers using high quality
                      communication services, photo updates, and quick response
                      time
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Technical Skills</Accordion.Header>
          <Accordion.Body>
            <Col>
              <Card className="resume-section" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Header className="resume-head">
                    Technical Skills
                  </Card.Header>
                  <ListGroup className="resume-box" variant="flush">
                    <ListGroup.Item>JavaScript ES6+</ListGroup.Item>
                    <ListGroup.Item>CSS3</ListGroup.Item>
                    <ListGroup.Item>Typescript</ListGroup.Item>
                    <ListGroup.Item>Angular</ListGroup.Item>
                    <ListGroup.Item>HTML5</ListGroup.Item>
                    <ListGroup.Item>SQL</ListGroup.Item>
                    <ListGroup.Item>NoSQL</ListGroup.Item>
                    <ListGroup.Item>GitHub</ListGroup.Item>
                    <ListGroup.Item>MongoDB</ListGroup.Item>
                    <ListGroup.Item>MySQL</ListGroup.Item>
                    <ListGroup.Item>Express</ListGroup.Item>
                    <ListGroup.Item>React</ListGroup.Item>
                    <ListGroup.Item>Node</ListGroup.Item>
                    <ListGroup.Item>Handlebars</ListGroup.Item>
                    <ListGroup.Item>jQuery</ListGroup.Item>
                    <ListGroup.Item>Bootstrap</ListGroup.Item>
                  </ListGroup>
                  <Card.Header className="resume-head">Skills</Card.Header>
                  <ListGroup className="resume-box" variant="flush">
                    <ListGroup.Item>Communication</ListGroup.Item>
                    <ListGroup.Item>Chemistry</ListGroup.Item>
                    <ListGroup.Item>Ceramics</ListGroup.Item>
                    <ListGroup.Item>Inventory Management</ListGroup.Item>
                    <ListGroup.Item>Supply Management</ListGroup.Item>
                    <ListGroup.Item>Safe Chemical Handling</ListGroup.Item>
                    <ListGroup.Item>Customer Care</ListGroup.Item>
                    <ListGroup.Item>Customer Service</ListGroup.Item>
                    <ListGroup.Item>Customer Support</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Resume;
