const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors")

const app = express();
app.use(cors())

app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server running"));

const contactEmail = nodemailer.createTransport({
	host: "127.0.0.1",
	port: 1025,
	secure: false,
	auth: {
		user: "jamiehewitt@pm.me",
		pass: "tQras5dh5w8TC7bLrbtK7w"
	},
	tls: {
			rejectUnauthorized: false
	}

  // service: "iCloud",
  // auth: {
  //   user: "jamie.l.hewitt@icloud.com",
  //   pass: "jryp-jutr-gets-oyeu"
  // }
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
    from: 'jamiehewitt@pm.me',
    to: "jamiehewitt@pm.me",
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
      res.json({ status: "ERROR"});
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

