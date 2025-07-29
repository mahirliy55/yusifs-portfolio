import { useState, useEffect, useCallback, memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../assets/img/avatar.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import git from "../assets/img/git.svg";

/**
 * Banner component displays the main hero section with typing animation
 * Features typewriter effect, WhatsApp integration, and responsive design
 * Memoized for performance optimization
 */
export const Banner = memo(() => {
  // State variables for typewriter animation
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 10);
  const [isHovered, setIsHovered] = useState(false);
  const [letterPositions, setLetterPositions] = useState([]);

  // Array of texts to rotate through in typewriter animation
  const toRotate = ["I'm Yusif", "I'm a Software", "And", "Mobile Developer"];
  const period = 1000; // Pause duration between text rotations

  // Initialize random positions for letters
  const aboutText = "I'm a passionate software developer with over 5 years of experience in web development. I specialize in Next.js and modern JavaScript frameworks, creating responsive and scalable web applications. My expertise includes full-stack development, UI/UX design, and building robust digital solutions that deliver exceptional user experiences.";
  
  useEffect(() => {
    const positions = aboutText.split('').map(() => ({
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 50,
      rotation: (Math.random() - 0.5) * 360
    }));
    setLetterPositions(positions);
  }, []);

  /**
   * Typewriter animation logic - handles text typing and deleting
   * Uses callback hook for performance optimization
   */
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Speed up deletion animation
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    // Handle text completion and start deletion
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }
    // Handle deletion completion and move to next text
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text.length, toRotate, period]);

  /**
   * Effect hook to manage typewriter animation timer
   * Cleans up interval on component unmount or dependency changes
   */
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, tick, delta]);

  /**
   * Handle WhatsApp click - opens WhatsApp with pre-filled message
   * Uses phone number and custom message for direct contact
   */
  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = "+34672012922";
    const message = "Hi! I saw your portfolio and I'd like to connect.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  }, []);

  /**
   * Handle GitHub click - opens GitHub profile in new tab
   */
  const handleGitClick = useCallback(() => {
    window.open("https://github.com/mahirliy55", "_blank");
  }, []);

  /**
   * Split text into individual letters wrapped in spans for animation
   */
  const splitTextToLetters = (text) => {
    return text.split('').map((char, index) => {
      const position = letterPositions[index] || { x: 0, y: 0, rotation: 0 };
      return (
        <span
          key={index}
          style={{
            display: 'inline-block',
            transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            transform: isHovered ? 
              `translate(${position.x}px, ${position.y}px) rotate(${position.rotation}deg)` : 
              'translate(0px, 0px) rotate(0deg)',
            opacity: isHovered ? 0.6 : 1,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      );
    });
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          {/* Left column - Text content and call-to-action */}
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! `}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {splitTextToLetters(aboutText)}
              </p>

              {/* Contact buttons with hover animations */}
              <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
                <button
                  className="vvd"
                  onClick={handleWhatsAppClick}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "15px 30px",
                    fontSize: "18px",
                  }}
                >
                  <span>Let's Connect</span>
                  <ArrowRightCircle size={25} />
                </button>
              </div>
            </div>
          </Col>

          {/* Right column - Profile image with animation */}
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div style={{ position: "relative" }}>
                  <img
                    src={avatar}
                    alt="Yusif Jabrayilov - Software Developer"
                    style={{
                      width: "100%",
                      maxWidth: "450px",
                      height: "450px",
                      borderRadius: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    className="vvd"
                    onClick={handleGitClick}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "15px 30px",
                      fontSize: "18px",
                      position: "absolute",
                      bottom: "0px",
                      right: "70px",
                    }}
                  >
                    <img
                      src={git}
                      alt="GitHub"
                      style={{ width: "90px", height: "90px" }}
                    />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
});
