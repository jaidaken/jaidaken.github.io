import React from "react";
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

function Contact() {
	return (
		<motion.section
			id="contact"
			className="contact"
			initial={{ y: "100%", opacity: 0 }}
			animate={{ y: "0%", opacity: [0, 1], transition: { duration: 0.2, ease: "linear" } }}
			exit={{ y: "-100%", transition: { duration: 0.2, ease: "linear" } }}
		>
			<div className="contact-container">
				<h1>Contact</h1>
			</div>
			<motion.div
				className="next"
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 1] }}
				transition={{ duration: 1, delay: 1 }}
			>
				<Link to="/" onClick={goToTop}> <BsArrowDownSquare /> </Link>
			</motion.div>
		</motion.section>
	)
}

export default Contact;
