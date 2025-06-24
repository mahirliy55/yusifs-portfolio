import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = ({ activeLink, setActiveLink }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleNavClick = (link) => {
    onUpdateActiveLink(link);
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home" aria-label="Portfolio Home">
            <img src={logo} alt="Portfolio Logo" />
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            aria-label="Toggle navigation menu"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => handleNavClick('home')}
                aria-label="Navigate to home section"
                aria-current={activeLink === 'home' ? 'page' : undefined}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => handleNavClick('skills')}
                aria-label="Navigate to skills section"
                aria-current={activeLink === 'skills' ? 'page' : undefined}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => handleNavClick('projects')}
                aria-label="Navigate to projects section"
                aria-current={activeLink === 'projects' ? 'page' : undefined}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a 
                  href="https://www.linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
              </div>
              <div className="social-icon">
                <a 
                  href="https://github.com/your-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                >
                  <img src={navIcon2} alt="GitHub" />
                </a>
              </div>
              <div className="social-icon">
                <a 
                  href="mailto:your-email@example.com"
                  aria-label="Send email"
                >
                  <img src={navIcon3} alt="Email" />
                </a>
              </div>
              <button 
                className="vvd" 
                onClick={() => handleNavClick('connect')}
                aria-label="Navigate to contact section"
              >
                <span>Let's Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
