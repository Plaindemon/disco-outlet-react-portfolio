import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

function Footer() {
  return (
    <Box>
    {/* <h1 style={{ color: "blue", 
                 textAlign: "center", 
                 marginTop: "-50px" }}>
      footer
    </h1> */}
    <Container>
      <Row>
        <Column>
          <Heading>About Us</Heading>
          <FooterLink href="about">About me</FooterLink>
        </Column>
        <Column>
          <Heading>Contact Us</Heading>
          <FooterLink href="contact">Plaindemon- benjamin chaplin</FooterLink>
          
        </Column>
        <Column>
          <Heading>Social Media & Links </Heading>
          
          <FooterLink href="https://www.instagram.com/plaindemon/">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>
                Instagram
              </span>
            </i>
          </FooterLink>
          <FooterLink href="https://github.com/Plaindemon">
            <i className="fab fa-github">
              <span style={{ marginLeft: "10px" }}>
                Github
              </span>
            </i>
          </FooterLink>
          <FooterLink href="https://www.youtube.com/channel/UCEMRkkQ9fW2MZpi1sLab3ng">
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