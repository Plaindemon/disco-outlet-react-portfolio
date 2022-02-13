import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "./Footer.css";

function Footer() {
  return (
    <Box className="footer-box">
      {/* <h1 style={{ color: "blue", 
                 textAlign: "center", 
                 marginTop: "-50px" }}>
      footer
    </h1> */}
      <Container className="footer-container">
        <Row className="footer-row">
          <Column className="footer-column">
            <Heading className="footer-header">About Us</Heading>
            <FooterLink className="footer-link" href="about">About me</FooterLink>
          </Column>
          <Column className="footer-column">
            <Heading className="footer-header">Contact Us</Heading>
            <FooterLink className="footer-link" href="contact">Plaindemon- benjamin chaplin</FooterLink>

          </Column>
          <Column className="footer-column">
            <Heading className="footer-header">Social Media & Links </Heading>

            <FooterLink className="footer-link" href="https://www.instagram.com/plaindemon/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink className="footer-link" href="https://github.com/Plaindemon">
              <i className="fab fa-github">
                <span style={{ marginLeft: "10px" }}>
                  Github
                </span>
              </i>
            </FooterLink>
            <FooterLink className="footer-link" href="https://www.youtube.com/channel/UCEMRkkQ9fW2MZpi1sLab3ng">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer;