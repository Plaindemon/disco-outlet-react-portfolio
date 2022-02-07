import React from "react";
import {  Link } from "react-router-dom";

function Nav() {

  return (
    <header>
  <h2>
    <Link to="/">
      <span role="img" aria-label="camera"> 🛸 Disco Outlet 🛸 </span>
    </Link>
  </h2>
  <nav>
    <ul className="flex-row">
    <li className="mx-2">
        <Link to="home">
          Home
        </Link>
      </li>
      <li className="mx-2">
        <Link to="about">
          About me
        </Link>
      </li>
      <li className="mx-2">
          <Link to="contact">
              Contact
          </Link>
      </li>
      <li className="mx-2">
        <Link to="portfolio">
            Portfolio
        </Link>
      </li>
      <li className="mx-2">
        <Link to="resume">Resume</Link>
      </li>
    </ul>
  </nav>
</header>
  );
}

export default Nav;