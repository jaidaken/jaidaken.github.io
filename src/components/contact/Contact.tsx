import { useState } from "react";
import './contact.css';
import { motion } from "framer-motion"
import { BsArrowDownSquare } from "react-icons/bs"
import { Link } from "react-router-dom";

function goToTop() {
	document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};

const Contact = () => {

	const [status, setStatus] = useState("Submit")
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setStatus("Sending...");
		const { name, email, subject, message } = e.target.elements
		let details = {
			name: name.value,
			email: email.value,
			subject: subject.value,
			message: message.value
		}
		let response = await fetch("http://localhost:5000/contact/", {
			method: "POST",
			credentials: 'include',
			headers: {
				"Content-Type": "application/json;charset=utf-8"
			},
			body: JSON.stringify(details)
		})
		setStatus("Submit");
		let result = await response.json();
		alert(result.status);
	}

	return (
		<motion.section
			id="contact"
			className="contact"
			initial={{ y: "100%", opacity: 0 }}
			animate={{ y: "0%", opacity: [0, 1] }}
			transition={{ ease: "backInOut", duration: 1.4 }}
			exit={{ y: "-100%" }}
		>
			<div className="contact-container">
				<h1>Contact</h1>
			</div>
			<form className="form" onSubmit={handleSubmit}>
				<div className="Formlabel">

					<label htmlFor="name"></label>
					<input
						type="text"
						id="name"
						placeholder="Name"
						required />

					<label htmlFor="email"></label>
					<input
						type="email"
						id="email"
						placeholder="Email"
						required />

					<label htmlFor="subject"></label>
					<input
						type="text"
						id="subject"
						placeholder="Subject"
						required />

					<label htmlFor="message"></label>
					<textarea
						id="message"
						rows={8}
						placeholder="Message"
						required />

					<button type="submit">{status}</button>
				</div>
			</form>

			<motion.div
				className="next"
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 1] }}
				transition={{ ease: 'easeInOut', duration: 1, delay: 2 }}
			>
				<Link to="/" onClick={goToTop}> <BsArrowDownSquare /> </Link>
			</motion.div>
		</motion.section>
	);
};

export default Contact;
