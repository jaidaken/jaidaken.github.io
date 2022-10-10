/* eslint-disable react/jsx-one-expression-per-line */
import "./bio.css";
import { motion } from "framer-motion"
import { BsArrowDownSquare } from "react-icons/bs"
import { Link } from "react-router-dom";

function goToTop() {
	document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};

function Bio() {
	return (
			<motion.section
				id="about"
				className="bio"
				initial={{ y: "100%", opacity: 0 }}
				animate={{ y: "0%", opacity: 1, transition: { duration: 0.2, ease: "linear" } }}
				exit={{ y: "-100%", transition: { duration: 0.2, ease: "linear" } }}
			>
			<div className="bio-container">
			<h2 className="bio-title">About Me</h2>

					<p>
						A web developer adept in building responsive, well-designed web applications, from front to back end.
						<span> My training with <a href="https://www.thejump.tech">The Jump: Digital School </a>
							has prepared me to build professional and efficient applications
							suited to the needs of my clients.</span>
					</p>
					<p>
						While I am currently a barista and
						coffee lover, I'm looking for a new challenge in an exciting
						industry. My skills and experience are varied, I have an eye for
						details that is needed within both the coffee industry and web development, as well as expereience
						working with, and running a team of baristas, including management of
						a store and all that this entails. I am an avid lover of tech and
						computers and believe this passion, mixed with my experience will put
						me in a great position to be an effective member of any team.
				</p>
				<motion.div
					className="next"
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 1] }}
					transition={{ duration: 1, delay: 1 }}
				>
					<Link to="/projects" onClick={goToTop}> <BsArrowDownSquare /> </Link>
				</motion.div>
				</div>
			</motion.section>
	);
}

export default Bio;
