import React from 'react';


function Resume() {
    return (
        <section id="resume-section">
            <h2 className="resume-head">Resume</h2>
            <div className="resume-education">
                <div className="resume-box">
                    <h4>Education: </h4>
                    <div>
                        <h5>Certificate, Full Stack Web Development </h5>
                        <h6>University of Utah - Salt Lake City, UT</h6>
                        <h6>August 2021 - February 2022</h6>
                    </div>
                    <div>
                        <h5>Bachelor's in Science</h5>
                        <h6>Utah State University - Logan, UT</h6>
                        <h6>August 2013 to May 2019</h6>
                    </div>
                    <div>
                        <h5>Minor in Anthropology</h5>
                        <h6>Utah State University - Logan, UT</h6>
                        <h6>August 2013 to May 2019</h6>
                    </div>
                    <div className="resume-box">
                        <p>Company 1: Ken Garff Automotive Group</p>
                        <p> Years worked (2019-2020)</p>

                        <p>Responsibilities: </p>
                        <ol className="resume-box">
                            <li>• Set daily and weekly appointments and communicated information to potential customers before their in store visits</li>
                            <li>• Used email, phone or text correspondence to answer customer inquiries in a timely and quality manner</li>
                            <li>• Managed time proficiently to make more sales inquiries and bring in more potential clientele </li>
                            <li>• Focused on creating a high-quality customer experience by fully explaining the car buying process to clients and answering any questions they came up with during the process  </li>
                            <li>• Maintained excellent communication to fellow coworkers and managers to best help streamline the car buying process</li>
                            <li>• Organized vehicles on the lot and practiced safe motor vehicle handling and maintenance
                            </li>

                        </ol>

                    </div>
                    <div className="resume-box">
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

                    </div>

                    <div className="resume-box">
                        <p>Company 3: Rover (Pet care mobile app) </p>
                        <p>Years worked (2009-2022)</p>

                        <p>Responsibilities: </p>
                        <ol className="resume-box">
                            <li> • Scheduled times for dog care overnight stays</li>
                            <li> • Cared for and monitor owners pets</li>
                            <li> • Used owner instructions for walking, feeding and exercise programs from pet owners </li>

                        </ol>

                    </div>
                </div>
            </div>

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