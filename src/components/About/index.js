import React, { useState } from "react";

import AboutMe from "./infoBox";
import { Button, Modal } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div className="about-box">
      {/* <div className="about-header-box about-box about-modal">
        <h1 className="about-header">Who am I?</h1>
      </div> */}
      <AboutMe />
    </div>
  );
}

export default About;
