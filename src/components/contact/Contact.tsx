import React from "react";
import './contact.css';
import { motion } from "framer-motion"
import { BsArrowDownSquare } from "react-icons/bs"
import { Link } from "react-router-dom";

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
			<motion.div
					className="next"
					initial={{ y: "60vh" }}
					animate={{ y: "0vh", opacity: [0, 1] }}
					transition={{ duration: 1, delay: 3 }}
				>
					<Link to="/"> <BsArrowDownSquare /> </Link>
				</motion.div>
			</motion.section>
	)
}

export default Contact;
