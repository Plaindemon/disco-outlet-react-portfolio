import React from 'react';
import { Link } from 'react-router-dom';
// import { Project2 } from "../../assets/images/project-2.jpeg";
import project3Image from "../../assets/images//noname.jpg";
import project2Image from "../../assets/images/project-2.jpeg";
import project1Image from "../../assets/images/weather-trails.gif";
import "./Portfolio.css"




function Portfolio() {
    return (
        <section className="work-section">
            <h3 id="portfolio">Portfolio: </h3>
            <ul className="work-title">

                <div className="card-body" style={{ width: '18rem' }}>
                    <li className="work-title"> Project 3 - Portfolio Project 3:
                    </li>
                    <a href="" >
                        <img src={project3Image} className="my-2" style={{ width: "50%" }} alt="cover" />
                    </a>

                    <a href="https://github.com/brotherson67/glowing-spork" className="work-link">
                        <p>
                            Github Repository - Glowing-spork
                        </p>
                    </a>


                </div>

                <div className="card-body" style={{ width: '18rem' }}>
                    <li className="work-title"> Randonnee - Portfolio Project 2:
                    </li>
                    <a href="" className="work-link">
                        <img src={project2Image} className="my-2" style={{ width: "50%" }} alt="cover" />
                    </a>
                    <a href="https://github.com/Plaindemon/greenberry" className="work-link">
                        <p>
                            Github Repository - Greenberry
                        </p>
                    </a>
                </div>

                <div className="card-body" style={{ width: '18rem' }}>
                    <li className="work-title">Weather Trails - Group Project 1:  </li>
                    <a href="https://plaindemon.github.io/weather-trails" className="work-link">
                        <img src={project1Image} className="my-2" style={{ width: "50%" }} alt="cover" />
                    </a>
                    <a href="https://github.com/Plaindemon/weather-trails" className="work-link">
                        <p>
                            Github Repository - Weather-Trails
                        </p>
                    </a>



                </div>

                {/* <li className="work-title">Weather Dashboard

                </li>

                <li className="work-title">Multiple Choice Quiz

                </li> */}
            </ul>
        </section>
    );
}

export default Portfolio;