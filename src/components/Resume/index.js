import React from 'react';
import { Card, Button, ListGroup, ListItem } from 'react-bootstrap';

function Resume() {
    return (
        <section>


            {/* <Card className="resume-head">Resume</Card> */}

            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}





            <Card className="resume-section" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="resume-head">Education: </Card.Subtitle>
                    <ListGroup className="resume-box" variant="flush">
                        <ListGroup.Item>Certificate, Full Stack Web Development </ListGroup.Item>
                        <ListGroup.Item>University of Utah - Salt Lake City, UT</ListGroup.Item>
                        <ListGroup.Item>August 2021 - February 2022</ListGroup.Item>

                    </ListGroup>
                    <ListGroup className="resume-box" variant="flush">
                        <ListGroup.Item>Bachelor's in Science</ListGroup.Item>
                        <ListGroup.Item>Utah State University - Logan, UT</ListGroup.Item>
                        <ListGroup.Item>August 2013 to May 2019</ListGroup.Item>

                    </ListGroup>
                    <ListGroup className="resume-box" variant="flush">

                        <ListGroup.Item>Minor in Anthropology</ListGroup.Item>
                        <ListGroup.Item>Utah State University - Logan, UT</ListGroup.Item>
                        <ListGroup.Item>August 2013 to May 2019</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            
                <Card.Header className="resume-head">Company 1: Ken Garff Automotive Group</Card.Header>
                
                
                
                <Card.Body className="resume-box">
                <Card.Title className="resume-head"> Years worked (2019-2020)</Card.Title>
                <Card.Title className="resume-head">Responsibilities: </Card.Title>
                <ListGroup className="resume-box" variant="flush">
                    <ListGroup.Item>• Set daily and weekly appointments and communicated information to potential customers before their in store visits</ListGroup.Item>
                    <ListGroup.Item>• Used email, phone or text correspondence to answer customer inquiries in a timely and quality manner</ListGroup.Item>
                    <ListGroup.Item>• Managed time proficiently to make more sales inquiries and bring in more potential clientele </ListGroup.Item>
                    <ListGroup.Item>• Focused on creating a high-quality customer experience by fully explaining the car buying process to clients and answering any questions they came up with during the process  </ListGroup.Item>
                    <ListGroup.Item>• Maintained excellent communication to fellow coworkers and managers to best help streamline the car buying process</ListGroup.Item>
                    <ListGroup.Item>• Organized vehicles on the lot and practiced safe motor vehicle handling and maintenance
                    </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <p>Company 2: Michael Kors</p>
                <p>Years worked (2016-2018)</p>

                <p>Responsibilities:  </p>
                <ol className="resume-box">
                    <li> • Performed excellent communication skills with customers to prioritize their needs</li>
                    <li> • Personalized the customer experience for each individual customer</li>
                    <li> • Top 3 in sales performance every month</li>
                    <li> • Processed shipment and organized back of house on daily basis </li>
                    <li> • Promoted new product with detailed explanations on what’s new and cultivated a positive customer service</li>

                </ol>

            </Card>

            <Card style={{ width: '18rem' }}>
                <p>Company 3: Rover (Pet care mobile app) </p>
                <p>Years worked (2009-2022)</p>

                <p>Responsibilities: </p>
                <ol className="resume-box">
                    <li> • Scheduled times for dog care overnight stays</li>
                    <li> • Cared for and monitor owners pets</li>
                    <li> • Used owner instructions for walking, feeding and exercise programs from pet owners </li>

                </ol>

            </Card>



            <div>
                <h4>Technical Skills</h4>
                <ul>
                    <li>JavaScript ES6+</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>SQL</li>
                    <li>NoSQL</li>
                    <li>GitHub</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Handlebars</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                </ul>
                <h4>Skills</h4>
                <ul>
                    <li>Communication</li>
                    <li>Chemistry</li>
                    <li>Ceramics</li>
                    <li>Inventory Management</li>
                    <li>Supply Management</li>
                    <li>Safe Chemical Handling</li>
                    <li>Customer Care</li>
                    <li>Customer Service</li>
                    <li>Customer Support</li>

                </ul>
            </div>

        </section>
    );
}

export default Resume;