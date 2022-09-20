import "./projects.css";

import { motion } from "framer-motion"
import IMG1 from "../../assets/code.jpg";
import ProjectCard from "./projectCard/ProjectCard";
import { BsArrowDownSquare } from "react-icons/bs"
import { Link } from "react-router-dom";

export default function Projects() {
	return (
			<motion.section
				id="projects"
				className="projects"
				initial={{ y: "100%" }}
				animate={{ y: "0%", opacity: [0, 1], transition: { duration: 0.2, ease: "linear" } }}
				exit={{ y: "-100%", transition: { duration: 0.2, ease: "linear" }}}
			>
				<div className="project-container">
					<h2 className="project-title">Projects</h2>
					<div className="cards">

						<ProjectCard img={IMG1} title="Vacation Log" desc="A Full-stack app with Auth0 and database to track your vacations and visited destinations!" demo="https://trip-logger-jh.herokuapp.com" source="https://github.com/jaidaken/trip-logger" />

						<ProjectCard img={IMG1} title="Responsive News" desc="Practice for responsive pages" demo="https://jaidaken.github.io/responsive-news-starter/" source="https://github.com/jaidaken/responsive-news-starter" />

						<ProjectCard img={IMG1} title="Portfolio" desc="You're on it!" demo="/" source="https://github.com/jaidaken/jaidaken.github.io" />

						<ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com" />

						<ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com" />

						<ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com" />

				</div>
				<motion.div
					className="next"
					initial={{ y: "60vh" }}
					animate={{ y: "0vh", opacity: [0, 1] }}
					transition={{ duration: 1, delay: 1 }}
				>
					<Link to="/contact"> <BsArrowDownSquare /> </Link>
				</motion.div>
				</div>
			</motion.section>
	);
}
