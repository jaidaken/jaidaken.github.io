const dotenv = require("dotenv").config();
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors")

const app = express();
app.use(cors())

const userEmail = process.env.USER_EMAIL;
const userPass = process.env.USER_PASSWORD;

app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server running"));

const contactEmail = nodemailer.createTransport({
	host: "127.0.0.1",
	port: 1025,
	secure: false,
	auth: {
		user: `${userEmail}`,
		pass: `${userPass}`,
	},
	tls: {
			rejectUnauthorized: false
	}
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
	const email = req.body.email;
	const subject = req.body.subject;
  const message = req.body.message;
  const mail = {
    from: `${userEmail}`,
    to: `${userEmail}`,
    subject: `${name}: ${subject}`,
		html: `

		Sent from the your portfolio form.

            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        `,
  };
  contactEmail.sendMail(mail, (error) => {
		if (error) {
			console.log(error);
      res.json({ status: "Error sending Email, Try clicking the link on the homepage instead."});
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

