import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

/**
 * Footer component displays newsletter subscription and social media links
 * Features responsive design and integration with MailchimpForm component
 */
export const Footer = () => {
  return (
    <footer className="footer" style={{ paddingTop: "100px" }}>
      <Container>
        <Row className="align-items-center">
          {/* Newsletter subscription section */}
          <MailchimpForm />
          
          {/* Social media links and copyright section */}
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div
              className="social-icon"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* LinkedIn profile link */}
              <a
                href="https://www.linkedin.com/in/yusif-jabrayilov/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              
              {/* Medium blog link */}
              <a
                href="https://medium.com/@yusifspain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Medium blog"
              >
                <img src={navIcon2} alt="Medium" />
              </a>
              
              {/* Instagram profile link */}
              <a
                href="https://www.instagram.com/thejabrael/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram profile"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            
            {/* Copyright notice */}
            <p className="text-center">Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
