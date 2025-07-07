import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

/**
 * Contact component handles the contact form functionality
 * Features form validation, email sending, and status feedback
 */
export const Contact = () => {
  // Initial form state object
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  
  // Component state management
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  /**
   * Updates form field values dynamically
   * @param {string} category - The form field name
   * @param {string} value - The new value for the field
   */
  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  /**
   * Handles form submission and sends email via backend API
   * @param {Event} e - Form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    try {
      // Send form data to backend contact endpoint
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      
      setButtonText("Send");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      
      // Handle response status and display appropriate message
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully'});
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.'});
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: 'Network error, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* Left column - Contact illustration */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          
          {/* Right column - Contact form */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="text" 
                        value={formDetails.firstName} 
                        placeholder="First Name" 
                        onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="text" 
                        value={formDetails.lastName} 
                        placeholder="Last Name" 
                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="email" 
                        value={formDetails.email} 
                        placeholder="Email Address" 
                        onChange={(e) => onFormUpdate('email', e.target.value)} 
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="tel" 
                        value={formDetails.phone} 
                        placeholder="Phone No." 
                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea 
                        rows="6" 
                        value={formDetails.message} 
                        placeholder="Message" 
                        onChange={(e) => onFormUpdate('message', e.target.value)}
                        required
                      ></textarea>
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                    
                    {/* Status message display */}
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
