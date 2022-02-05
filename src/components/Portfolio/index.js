import React from 'react';
// import { HashLink } from 'react-router-hash-link';
// import { Project2 } from "../../assets/images/project-2.jpeg";
import project3Image from "../../assets/images//noname.jpg";
import project2Image from "../../assets/images/project-2.jpeg";
import project1Image from "../../assets/images/weather-trails.jpg";
import project1Image2 from "../../assets/images/weather2.jpg";
import project1Image3 from "../../assets/images/weather3.jpg";

function Portfolio() {
    return (
        <section>
            <h3 id="portfolio">Portfolio: </h3>
            <ul className="work-title">
            <li className="work-title"> Project 3 - Portfolio Project 3:   
                </li>
                <a href="google.com">
                <img src={project3Image} className="my-2" style={{ width: "50%" }} alt="cover" /></a>
                <li className="work-title"> Randonnee - Portfolio Project 2:   
                </li>
                <img src={project2Image} className="my-2" style={{ width: "50%" }} alt="cover" />
                <li className="work-title">Weather Trails - Group Project 1:  </li>
                <img src={project1Image} className="my-2" style={{ width: "50%" }} alt="cover" />
                <img src={project1Image2} className="my-2" style={{ width: "50%" }} alt="cover" />
                <img src={project1Image3} className="my-2" style={{ width: "50%" }} alt="cover" />

                <li className="work-title">Weather Dashboard
                    
                </li>

                <li className="work-title">Multiple Choice Quiz
                    
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;