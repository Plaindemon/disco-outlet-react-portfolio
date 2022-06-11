import React, { useState } from 'react';
import coverImage from "../../assets/images/ben.jpg";
import { Button, Modal } from 'react-bootstrap';
import "./About.css";




function About() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className="about-box">
      

        <div className="about-modal">
          <h1 className="about-header">Who am I?</h1>
          <img src={coverImage} className="my-2 about-img" style={{ width: "20%" }} alt="cover" />
          <p className="about-paragraph"> Full stack web developer with experience in HTML, javascript, react as well as experience outside the web development field in anthropology, psychology, science such as biology and chemistry, as well as experience in sales, customer service, art/ceramics and many other fields.</p>
        </div>
        <div>
          
        </div>
      
    </div>
  );
}

export default About;