import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

/**
 * Navigation bar component with smooth scrolling and responsive design
 * Features social media links, dynamic styling, and mobile-friendly collapse menu
 */
export const NavBar = () => {
  // State for tracking active navigation link
  const [activeLink, setActiveLink] = useState("home");
  // State for tracking scroll position to apply background styling
  const [scrolled, setScrolled] = useState(false);

  /**
   * Effect hook to handle scroll event for navbar background change
   * Adds/removes 'scrolled' class based on scroll position
   */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * Updates active link state when navigation item is clicked
   * @param {string} value - The value of the clicked navigation link
   */
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar
        expand="md"
        className={scrolled ? "scrolled" : ""}
        style={{
          borderRadius: "50px",
          width: "90%",
          margin: "0 auto",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: scrolled
            ? "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)"
            : "transparent",
        }}
      >
        <Container>
          {/* Brand logo */}

          {/* Mobile menu toggle button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          {/* Collapsible navigation content */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Main navigation links */}
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                style={{
                  fontSize: "14px",
                }}
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                style={{
                  fontSize: "14px",
                }}
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                style={{
                  fontSize: "14px",
                }}
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>

            {/* Social media icons and connect button */}
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "32px",
                    height: "32px",
                  }}
                >
                  <img src={navIcon1} alt="LinkedIn Profile" />
                </a>
                <a
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "32px",
                    height: "32px",
                  }}
                >
                  <img src={navIcon2} alt="Facebook Profile" />
                </a>
                <a
                  href="https://www.instagram.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "32px",
                    height: "32px",
                  }}
                >
                  <img src={navIcon3} alt="Instagram Profile" />
                </a>
              </div>

              {/* Connect button with smooth scroll to contact section */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
