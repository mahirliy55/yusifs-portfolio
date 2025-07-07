const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

/**
 * Express server configuration for handling portfolio contact form emails
 * Features CORS support and nodemailer integration for email sending
 */

// Server used to send emails
const app = express();
const PORT = 5000;

// Middleware configuration
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies

/**
 * Email transporter configuration using nodemailer
 * Uses Gmail SMTP service with app-specific password
 */
const contactEmail = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: "noreplyyusif@gmail.com", // Sender email address
    pass: "" // App-specific password (should be in environment variables)
  },
});

/**
 * Verify email transporter connection on server startup
 */
contactEmail.verify((error) => {
  if (error) {
    console.log("Email service error:", error);
  } else {
    console.log("Ready to Send emails");
  }
});

/**
 * POST /contact - Handle contact form submissions
 * Sends email using provided form data and returns status response
 */
app.post("/contact", (req, res) => {
  // Extract form data from request body
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  
  // Construct email content
  const mail = {
    from: name,
    to: "noreplyyusif@gmail.com", // Recipient email address
    subject: "Contact Form Submission - Portfolio Website",
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };
  
  // Send email and handle response
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error sending email:", error);
      res.json({ code: 500, status: "Message sending failed" });
    } else {
      console.log("Email sent successfully");
      res.json({ code: 200, status: "Message sent successfully" });
    }
  });
});

/**
 * Start the server on specified port
 */
app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
