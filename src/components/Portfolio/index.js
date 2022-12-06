import React from "react";
// import Carousel from "./Carousel";
import RoutesProject from "./Routes";
import RandonneeProject from "./Randonnee";
import WeatherTrailsProject from "./WeatherTrails";
import RobotRent from "./RobotRent";
import "./Portfolio.css";


function Portfolio() {
  return (
    <div className="portfolio-box">
      {/* <Carousel /> */}
      
      <h3 id="portfolio">Portfolio: </h3>
      
      <RoutesProject />
      <RandonneeProject />
      <WeatherTrailsProject />
      <RobotRent />
      {/* <section className="work-section"> */}
        {/* <ul className="work-title"> */}

        {/* <div className="card-body-port">
          <ul className="card-list">
            <li className="work-title"> Project 3 - Portfolio Project 3:</li>
            <a href="https://glowing-sporky-routes.herokuapp.com/">
              <img
                src={project3Image}
                className="my-2"
                style={{ width: "50%" }}
                alt="cover"
              />
            </a>

            <a
              href="https://github.com/brotherson67/glowing-spork"
              className="work-link"
            >
              <p>Github Repository - Glowing-spork</p>
            </a>
          </ul>
        </div>

        <div className="card-body-port">
          <ul className="card-list">
            <li className="work-title"> Randonnee - Portfolio Project 2:</li>
            <a href="" className="work-link">
              <img
                src={project2Image}
                className="my-2"
                style={{ width: "50%" }}
                alt="cover"
              />
            </a>
            <a
              href="https://github.com/Plaindemon/greenberry"
              className="work-link"
            >
              <p>Github Repository - Greenberry</p>
            </a>
          </ul>
        </div>

        <div className="card-body-port">
          <ul className="card-list">
            <li className="work-title">Weather Trails - Group Project 1: </li>
            <a
              href="https://plaindemon.github.io/weather-trails"
              className="work-link"
            >
              <img
                src={project1Image}
                className="my-2"
                style={{ width: "50%" }}
                alt="cover"
              />
            </a>
            <a
              href="https://github.com/Plaindemon/weather-trails"
              className="work-link"
            >
              <p>Github Repository - Weather-Trails</p>
            </a>
          </ul>
        </div> */}

        {/* <li className="work-title">Weather Dashboard

                </li>

                <li className="work-title">Multiple Choice Quiz

                </li> */}
        {/* </ul> */}
      {/* </section> */}
    </div>
  );
}

export default Portfolio;
