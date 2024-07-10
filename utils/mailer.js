const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "priyanshu.gupta.it25@heritageit.edu.in",
      pass: process.env.DCM_MAIL_AUTH_PASSWORD,
   },
});

const sendConfirmationEmail = (email, username, confirmationCode) => {
   const mailOptions = {
      from: "priyanshu.gupta.it25@heritageit.edu.in",
      to: email,
      subject: "Account Confirmation",
      text: `Hello ${username},\nPlease use the following confirmation code to activate your account: ${confirmationCode}\n\nThank You!`,
   };

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         console.log(error);
      } else {
         console.log("Email sent: " + info.response);
      }
   });
};

module.exports = sendConfirmationEmail;
