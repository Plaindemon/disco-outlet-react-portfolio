import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import { Link } from "react-router-dom";
// import { Project2 } from "../../assets/images/project-2.jpeg";
import project3Image from "../../assets/images//noname.jpg";
import project2Image from "../../assets/images/project-2.jpeg";
import project1Image from "../../assets/images/weather-trails.gif";
import "./Portfolio.css";

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item className="carousel">
          <Carousel.Caption className="carousel-caption">
            <h3 className="work-title">Routes</h3>
            <p>Ski, Snowboard, Run with friends!</p>
          </Carousel.Caption>

          <img
            className="d-block w-60 my-2"
            alt="First slide cover"
            src={project3Image}
            style={{ width: "50%" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <Carousel.Caption className="carousel-caption">
            <h3>Randonnee</h3>
            <p>Climb with friends!</p>
          </Carousel.Caption>
          <img
            className="d-block w-60 my-2"
            alt="First slide cover"
            src={project2Image}
            style={{ width: "50%" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <Carousel.Caption className="carousel-caption">
            <h3>Weather Trails</h3>
            <p>
              Checks the weather and 5 day forecast and can search National Parks service for parks in each State
            </p>
          </Carousel.Caption>
          <img
            className="d-block w-60 my-2"
            alt="Third slide cover"
            src={project1Image}
            style={{ width: "50%" }}
          />
        </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;