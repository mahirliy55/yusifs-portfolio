import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/unisyn.png";
import projImg2 from "../assets/img/ekip.svg";
import projImg3 from "../assets/img/vriendly.png";
import projImg4 from "../assets/img/baysart.svg";
import projImg5 from "../assets/img/logowhite.png";
import projImg6 from "../assets/img/autanate.svg";
import projImg7 from "../assets/img/npm.svg";
import projImg8 from "../assets/img/stellar.png";
import projImg9 from "../assets/img/keyboard1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "react-bootstrap/Carousel";

/**
 * Projects component displays a showcase of professional projects and npm packages
 * Features animated carousels and responsive design for different screen sizes
 */
export const Projects = () => {
  // Main professional projects array with detailed descriptions
  const projects = [
    {
      title: "Unisyn",
      description:
        "I worked as the Frontend Team Lead. I developed both the landing page and the main application from scratch. I contributed to both the design and functionality, actively participating in all stages of the project. Unisyn is an AI-driven commercial lending platform that accelerates modern lending workflows.",
      imgUrl: projImg1,
      imgName: "unisyn.png",
      link: "https://unisyn.global/",
    },
    {
      title: "Ekip.co",
      description:
        "A software agency where I had my first experience with Next.js. I developed the landing page and contributed to many of Ekip.co's web and mobile products, working on both design and functionality.",
      imgUrl: projImg2,
      imgName: "ekip.svg",
      link: "https://ekip.co/",
    },
    {
      title: "Vriendly",
      description:
        "A VR school startup created during the COVID-19 pandemic. I was responsible for developing engaging animations and successfully delivered all my tasks. My work contributed to creating immersive and interactive user experiences for the platform. ",
      imgUrl: projImg3,
      imgName: "vriendly.png",
      link: "https://www.vriendly.co/",
    },
    {
      title: "Baysart",
      description:
        "An e-commerce platform created for the Azerbaijan market, developed for both web and mobile using React Native. I worked as the Team Lead Frontend and Mobile Developer, overseeing the development and delivery of the product across platforms.",
      imgUrl: projImg4,
      imgName: "baysart.svg",
      link: "https://baysart.com/en",
    },
    {
      title: "Hukuka Uygun",
      description:
        "Developed with React Native, Hukuka Uygun is one of the top legal real estate platforms in Turkey. I was responsible for the mobile app development, ensuring a seamless and reliable user experience for clients and legal professionals.",
      imgUrl: projImg5,
      imgName: "hukuka-uygun.svg",
      link: "https://hukukauygun.com/",
    },
    {
      title: "Autanate",
      description:
        "As the team lead (and still the go-to support guy), I've been at the heart of Autanate—a 'NoCoding' platform that lets you build your own forms and customize parts of your site with ease. If you want your mind blown (or your head to explode from excitement), this is the project to join! For those who love to code, step right up and show us what you've got—Autanate is where the real fun begins. 🤯",
      imgUrl: projImg6,
      imgName: "autanate.svg",
      link: "https://autanate.com/",
    },
  ];

  // NPM packages array showcasing open-source contributions
  const npmPackages = [
    {
      title: "stellar-id ⭐️",
      description:
        "A TypeScript library for generating unique, deterministic, star-themed identifiers using real astronomical data. Stellar ID combines cryptography with the beauty of astronomy—every ID includes a real star name, scientific data, and a hash. Perfect for memorable project IDs, user sessions, and more. Featured on npm as a modern, educational, and beautiful solution for unique identifiers.",
      imgUrl: projImg8,
      link: "https://www.npmjs.com/package/stellar-id",
    },
    {
      title: "keyboard-heatmap 🎹",
      description:
        "A beautiful, lightweight TypeScript package for tracking keyboard usage and generating stunning heatmap visualizations",
      imgUrl: projImg9,
      link: "https://www.npmjs.com/package/keyboard-heatmap",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <p>
                    Here you'll find a selection of my most ambitious and
                    innovative projects—each one built to solve real-world
                    problems and push the boundaries of what's possible in web
                    and mobile development. If you're looking for creativity,
                    quality, and results, you're in the right place.
                  </p>
                  {/* Projects carousel with custom animation delays for smooth entrance effects */}
                  <Carousel interval={null} indicators={false}>
                    {projects.map((project, index) => (
                      <Carousel.Item key={index}>
                        <div
                          className={`animate__animated animate__fadeInRight`}
                          style={{
                            animationDelay: `${index * 0.2}s`, // Staggered animation for visual appeal
                            animationDuration: "0.8s",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <ProjectCard {...project} />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        {/* Separator between projects and npm packages */}
        <hr />

        {/* NPM Packages section showcasing open-source contributions */}
        <Row style={{ marginTop: "100px" }}>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>
                    My{" "}
                    <img
                      src={projImg7}
                      alt="NPM Packages"
                      style={{ width: "90px", height: "90px" }}
                    />{" "}
                    Packages
                  </h2>

                  {/* NPM packages carousel */}
                  <Carousel interval={null} indicators={false}>
                    {npmPackages.map((project, index) => (
                      <Carousel.Item key={index}>
                        <div
                          className={`animate__animated animate__fadeInRight`}
                          style={{
                            animationDelay: `${index * 0.2}s`,
                            animationDuration: "0.8s",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <ProjectCard {...project} />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* Background decoration image positioned on the right */}
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background decoration"
      ></img>
    </section>
  );
};
