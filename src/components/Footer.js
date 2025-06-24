import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{ paddingTop: "100px" }}>
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div
              className="social-icon"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.linkedin.com/in/yusif-jabrayilov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://medium.com/@yusifspain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Medium" />
              </a>
              <a
                href="https://www.instagram.com/thejabrael/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p className="text-center">Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
