import { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./components/Skills";

function App() {
  const [activeLink, setActiveLink] = useState('home');

  // Memoize components for better performance
  const memoizedComponents = useMemo(() => ({
    banner: <Banner />,
    projects: <Projects />,
    contact: <Contact />,
    footer: <Footer />
  }), []);

  return (
    <div className="App">
      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
