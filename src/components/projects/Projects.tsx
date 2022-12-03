import "./projects.css";

import { motion } from "framer-motion"
import IMG1 from "../../assets/code.webp";
import ProjectCard from "./projectCard/ProjectCard";
import { BsArrowDownSquare } from "react-icons/bs"
import { Link } from "react-router-dom";

function goToTop() {
	document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};

export default function Projects() {
	return (
		<motion.section
			id="projects"
			className="projects"
			initial={{ y: "100%", opacity: 0 }}
			animate={{ y: "0%", opacity: 1 }}
			transition={{ ease: "backInOut", duration: 1.4 }}
			exit={{ y: "-100%" }}
		>
			<div className="project-container">
				<h2 className="project-title">Projects</h2>
				<div className="cards">

					<ProjectCard img={IMG1} title="Vacation Log" desc="A Full-stack app with Auth0 and database to track your vacations and visited destinations!" demo="https://trip-logger-jh.herokuapp.com" source="https://github.com/jaidaken/trip-logger" />

					<ProjectCard img={IMG1} title="Responsive News" desc="Practice for responsive pages" demo="https://jaidaken.github.io/responsive-news-starter/" source="https://github.com/jaidaken/responsive-news-starter" />

					<ProjectCard img={IMG1} title="Portfolio" desc="You're on it!" demo="/" source="https://github.com/jaidaken/jaidaken.github.io" />

					<ProjectCard img={IMG1} title="Typescript Calculator" desc="A functional calculator built with React and Typescript" demo="https://merry-gingersnap-27b3bb.netlify.app/" source="https://github.com/jaidaken/type-calc" />

					<ProjectCard img={IMG1} title="Todo List" desc="Fully CRUD enabled Todo list app in vanilla JS" demo="https://steady-concha-f15d64.netlify.app/" source="https://github.com/jaidaken/Todo" />

					{/* <ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com" /> */}

				</div>
				<motion.div
					className="next"
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 1] }}
					transition={{ ease: 'easeInOut', duration: 1, delay: 2 }}
				>
					<Link to="/contact" onClick={goToTop}> <BsArrowDownSquare /> </Link>
				</motion.div>
			</div>
		</motion.section>
	);
}
