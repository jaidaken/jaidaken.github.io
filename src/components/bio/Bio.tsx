/* eslint-disable react/jsx-one-expression-per-line */
import "./bio.css";
import { motion } from "framer-motion"
import CircleMe from 'assets/circleme.png';

function Bio() {
	return (
			<motion.section
				id="about"
				className="bio"
				initial={{ y: "100%" }}
				animate={{ y: "0%", opacity: [0, 1] }}
				exit={{ y: "-100%", transition: { duration: 0.2 } }}
			>
				<div className="bio-container">

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
				</div>
			</motion.section>
	);
}

export default Bio;
