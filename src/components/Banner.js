import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../assets/img/avatar.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import git from "../assets/img/git.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 10);
  const [index, setIndex] = useState(1);
  const toRotate = ["I'm Yusif", "I'm a Software", "And", "Mobile Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="banner-text-col">
            <div className="banner-content">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1 className="banner-title">
                {`Hi! `}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p className="banner-description">
                I'm a passionate software developer with over 5 years of
                experience in web development. I specialize in Next.js and
                modern JavaScript frameworks, creating responsive and scalable
                web applications. My expertise includes full-stack development,
                UI/UX design, and building robust digital solutions that deliver
                exceptional user experiences.
              </p>
              <button
                className="banner-button"
                onClick={() => {
                  const phoneNumber = "+34672012922";
                  const message =
                    "Hi! I saw your portfolio and I'd like to connect.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5} className="banner-image-col">
            <div className="banner-image-container">
              <img
                src={avatar}
                alt="Header Img"
                className="banner-avatar"
              />

              <img
                src={git}
                alt="Git"
                onClick={() =>
                  window.open("https://github.com/mahirliy55", "_blank")
                }
                className="banner-git-icon"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
