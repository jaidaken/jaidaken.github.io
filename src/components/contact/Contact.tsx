import React from "react";
import './contact.css';
import { motion } from "framer-motion"

function Contact() {
	return (
			<motion.section
				id="contact"
				className="contact"
				initial={{ y: "100%" }}
				animate={{ y: "0%", opacity: [0, 1] }}
				exit={{ y: "-100%", transition: { duration: 0.2 } }}
			>
				<div className="contact-container">
					<h1>Contact</h1>
				</div>
			</motion.section>
	)
}

export default Contact;
