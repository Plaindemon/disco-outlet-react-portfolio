import React from "react";
// import { Container } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer footer-container">
      <div className="footer-div">
        <div className="footer-container-outer-div">
          <div className="footer-container-inner-div">
            <div className="footer-header">About</div>
            <a className="footer-link" href="about">
              About me
            </a>
          </div>
        </div>

        <div className="footer-container-outer-div">
          <div className="footer-container-inner-div">
            <div className="footer-header">Contact Us</div>
            <a className="footer-link" href="contact">
              Plaindemon- benjamin chaplin
            </a>
          </div>
        </div>
        <div className="footer-container-outer-div">
          <div className="footer-container-inner-div">
            <div className="footer-header">Social Media & Links </div>
            <div className="footer-container-inner-social-div">
              <a
                className="footer-link-social"
                href="https://www.instagram.com/plaindemon/"
              >
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </a>
              <a
                className="footer-link-social"
                href="https://github.com/Plaindemon"
              >
                <i className="fab fa-github">
                  <span style={{ marginLeft: "10px" }}>Github</span>
                </i>
              </a>
              <a
                className="footer-link-social"
                href="https://www.youtube.com/channel/UCEMRkkQ9fW2MZpi1sLab3ng"
              >
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
