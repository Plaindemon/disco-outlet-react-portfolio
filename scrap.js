return (
    <Container>
        <Button id="print" type="button" onClick={printPdf}>
            Print PDF
        </Button>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>

            {/* <Card className="resume-section" style={{ width: '18rem' }}> */}
            <Accordion.Item eventKey="0">
                <Accordion.Header className="resume-head">Education: </Accordion.Header>
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
            </Accordion.Item>
            {/* </Card> */}
        </Accordion>
        <Accordion>
            <Card className="resume-section" style={{ width: '18rem' }}>

                <Card.Header className="resume-head">Company 1: Ken Garff Automotive Group</Card.Header>



                <Card.Body className="resume-box">
                    <Card.Title className="resume-head"> Years worked (2019-2020)</Card.Title>
                    <Card.Title className="resume-head">Responsibilities: </Card.Title>
                    <ListGroup className="resume-box" variant="flush">
                        <ListGroup.Item>??? Set daily and weekly appointments and communicated information to potential customers before their in store visits</ListGroup.Item>
                        <ListGroup.Item>??? Used email, phone or text correspondence to answer customer inquiries in a timely and quality manner</ListGroup.Item>
                        <ListGroup.Item>??? Managed time proficiently to make more sales inquiries and bring in more potential clientele </ListGroup.Item>
                        <ListGroup.Item>??? Focused on creating a high-quality customer experience by fully explaining the car buying process to clients and answering any questions they came up with during the process  </ListGroup.Item>
                        <ListGroup.Item>??? Maintained excellent communication to fellow coworkers and managers to best help streamline the car buying process</ListGroup.Item>
                        <ListGroup.Item>??? Organized vehicles on the lot and practiced safe motor vehicle handling and maintenance
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

        </Accordion>
        <Accordion>
            <Card className="resume-section" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Header className="resume-head">Company 2: Michael Kors</Card.Header>
                    <Card.Body className="resume-box">
                        <Card.Title className="resume-head">Years worked (2016-2018)</Card.Title>

                        <Card.Title className="resume-head">Responsibilities: </Card.Title>
                        <ListGroup className="resume-box" variant="flush">
                            <ListGroup.Item> ??? Performed excellent communication skills with customers to prioritize their needs</ListGroup.Item>
                            <ListGroup.Item> ??? Personalized the customer experience for each individual customer</ListGroup.Item>
                            <ListGroup.Item> ??? Top 3 in sales performance every month</ListGroup.Item>
                            <ListGroup.Item> ??? Processed shipment and organized back of house on daily basis </ListGroup.Item>
                            <ListGroup.Item> ??? Promoted new product with detailed explanations on what???s new and cultivated a positive customer service</ListGroup.Item>

                        </ListGroup>
                    </Card.Body>
                </Card.Body>
            </Card>
        </Accordion>
        {/* <Card className="resume-section" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Header className="resume-head">Company 3: Rover (Pet care mobile app) </Card.Header>
                        <Card.Title className="resume-head">Years worked (2009-2022)</Card.Title>

                        <Card.Title className="resume-head">Responsibilities: </Card.Title>
                        <ListGroup className="resume-box" variant="flush">
                            <ListGroup.Item> ??? Scheduled times for dog care overnight stays</ListGroup.Item>
                            <ListGroup.Item> ??? Cared for and monitor owners pets</ListGroup.Item>
                            <ListGroup.Item> ??? Used owner instructions for walking, feeding and exercise programs from pet owners </ListGroup.Item>

                        </ListGroup>
                    </Card.Body>
                </Card> */}
        <Accordion>
            <Card className="resume-section" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Header className="resume-head">Technical Skills</Card.Header>
                    <ListGroup className="resume-box" variant="flush">
                        <ListGroup.Item>JavaScript ES6+</ListGroup.Item>
                        <ListGroup.Item>CSS3</ListGroup.Item>
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



        </Accordion>

    </Container>
);