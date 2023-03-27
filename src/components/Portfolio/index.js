import React from "react";
// import Carousel from "./Carousel";
import RoutesProject from "./Routes";
import RandonneeProject from "./Randonnee";
import WeatherTrailsProject from "./WeatherTrails";
import RobotRent from "./RobotRent";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container-outer-div">
      {/* <Carousel /> */}
      <h3 className="portfolio-header">Portfolio: </h3>
      <div className="portfolio-container-inner-div">
        <RoutesProject  className="routes-card" />
        <RandonneeProject className="randonnee-card" />
        <WeatherTrailsProject className="weather-trails-card" />
        <RobotRent className="robot-rent-card" />
      </div>
    </div>
  );
}

export default Portfolio;
