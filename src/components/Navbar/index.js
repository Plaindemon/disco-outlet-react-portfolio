import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h2>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fa-solid fa-ghost" />
          </Link>
        </h2>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li className="nav-item">
            <Link to="home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="about" className="nav-links" onClick={closeMobileMenu}>
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="resume" className="nav-links" onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
