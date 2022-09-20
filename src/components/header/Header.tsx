import "./header.css";

import { motion } from "framer-motion";
import { AiFillFilePdf, AiOutlineMail } from "react-icons/ai";
import { BsArrowDownSquare } from "react-icons/bs"
import * as bs from "react-icons/bs";
import CircleMe from '../../assets/circleme.png';

import CV from "../../assets/CV.pdf";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<motion.section
			id="home" className="header"
			initial={{ opacity: 0 }}
			animate={{ opacity: [0, 1] }}
			exit={{ y: "-100%", transition: { duration: 0.2 } }}
		>
			<div className="header-container">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 1] }}
					transition={{ duration: 1 }}
				>
					Hello, I'm Jamie Hewitt
				</motion.h1>
				<img src={CircleMe} alt="A Picture of Jamie Hewitt" />
				<h2>Full Stack Web Developer</h2>

				<h4 className="techs">
					HTML • CSS • Javascript • Typescript • Node.js • ES6+ • React • React-Router • Redux • GraphQL • Framer Motion •
					MongoDB • MySQL • PostgreSQL • Vite • Git
				</h4>
				<div className="links">
					<motion.a
						initial={{ y: "60vh" }}
						animate={{ y: "0vh", opacity: [0, 1] }}
						transition={{ duration: 1, delay: 1 }}
						href="https://github.com/jaidaken"
						target="__blank"
						rel="noreferrer"
					>
						<bs.BsGithub />
					</motion.a>
					<motion.a
						initial={{ y: "60vh" }}
						animate={{ y: "0vh", opacity: [0, 1] }}
						transition={{ duration: 1, delay: 1.3 }}
						href="https://www.linkedin.com/in/jhewitthw/"
						target="__blank"
						rel="noreferrer"
					>
						<bs.BsLinkedin />
					</motion.a>

					<motion.a
						initial={{ y: "60vh" }}
						animate={{ y: "0vh", opacity: [0, 1] }}
						transition={{ duration: 1, delay: 1.6 }}
						href={CV}
						target="_blank"
						rel="noreferrer"
					>
						<AiFillFilePdf />
					</motion.a>
					<motion.a
						initial={{ y: "60vh" }}
						animate={{ y: "0vh", opacity: [0, 1] }}
						transition={{ duration: 1, delay: 1.9 }}
						href="mailto:jamiehewitt@protonmail.com"
						target="__blank"
					>
						<AiOutlineMail />
					</motion.a>

				</div>
				<motion.div
					className="next"
					initial={{ y: "60vh" }}
					animate={{ y: "0vh", opacity: [0, 1] }}
					transition={{ duration: 1, delay: 2.5 }}
				>
					<Link to="/about"> <BsArrowDownSquare /> </Link>
				</motion.div>
			</div>
		</motion.section>
	);
}

export default Header
