const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
// Server used to send emails
app.use(cors());
app.use(express.json());

let transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/send", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let phone = req.body.phone;
  let mail = {
    from: name,
    to: "your-email@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `Name: ${name}
           Email: ${email}
           Phone: ${phone}
           Message: ${message}`,
  };
  transporter.sendMail(mail, (error, data) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message sent" });
    }
  });
});
app.listen(5000, () => {
  console.log("Server Running on 5000");
});
