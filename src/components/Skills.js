import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

/**
 * Skills component displays technical skills with animated carousel
 * Features responsive design and custom carousel controls
 */
export const Skills = () => {
  // Responsive configuration for the carousel
  // The naming can be any, depends on you.
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are the core technologies and skills I've mastered throughout my career as a software developer. From frontend frameworks to backend solutions, I bring versatility and expertise to every project.</p>
                        
                        {/* Skills carousel with custom responsive breakpoints */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Next.js Framework" />
                                <h5>Next.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="React Library" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Vue.js Framework" />
                                <h5>Vue.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Angular Framework" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="React Native Development" />
                                <h5>React Native</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Flutter Development" />
                                <h5>Flutter</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* Background decorative image */}
        <img className="background-image-left" src={colorSharp} alt="Background decoration" />
    </section>
  )
}
