import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/unisyn.png";
import projImg2 from "../assets/img/ekip.svg";
import projImg3 from "../assets/img/vriendly.png";
import projImg4 from "../assets/img/baysart.svg";
import projImg5 from "../assets/img/logowhite.png";
import projImg6 from "../assets/img/autanate.svg";
import projImg7 from "../assets/img/npm.svg";
import projImg8 from "../assets/img/stellar.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "react-bootstrap/Carousel";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading projects data
    const loadProjects = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const projectsData = [
          {
            title: "Unisyn",
            description: "A comprehensive platform for managing and synchronizing data across multiple systems. Built with modern web technologies to ensure seamless data flow and real-time updates.",
            imgUrl: "https://via.placeholder.com/400x300?text=Unisyn",
            link: "https://unisyn.global/",
          },
          {
            title: "Ekip",
            description: "An innovative team collaboration tool designed to enhance productivity and streamline communication. Features real-time messaging, task management, and project tracking.",
            imgUrl: "https://via.placeholder.com/400x300?text=Ekip",
            link: "https://ekip.co/",
          },
          {
            title: "Vriendly",
            description: "A social networking platform focused on building meaningful connections. Combines modern UI/UX with advanced algorithms to create engaging user experiences.",
            imgUrl: "https://via.placeholder.com/400x300?text=Vriendly",
            link: "https://www.vriendly.co/",
          },
          {
            title: "Stellar ID",
            description: "A secure identity management system built with blockchain technology. Provides decentralized identity verification and authentication services.",
            imgUrl: "https://via.placeholder.com/400x300?text=Stellar+ID",
            link: "https://www.npmjs.com/package/stellar-id",
          },
        ];
        
        setProjects(projectsData);
        setLoading(false);
      } catch (err) {
        console.error("Error loading projects:", err);
        setError("Failed to load projects");
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Projects</h2>
                    <p>Loading amazing projects...</p>
                    <div className="loading-spinner">
                      <div className="spinner"></div>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <div className="error-message">
                <h2>Projects</h2>
                <p>Error: {error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of my recent projects that showcase my skills and experience.</p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
