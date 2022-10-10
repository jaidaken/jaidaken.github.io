import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BsArrowDownSquare } from "react-icons/bs"
import './pagenotfound.css'

function goToTop() {
	document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};

function PageNotFound() {
	return (<>
		<h1 className='pnf'>404</h1>
		<motion.div
			className="next"
			initial={{ opacity: 0 }}
			animate={{ opacity: [0, 1] }}
			transition={{ duration: 1, delay: 1.5 }}
		>
			<Link to="/" onClick={goToTop}> <BsArrowDownSquare /> </Link>
		</motion.div>
	</>
	)
}

export default PageNotFound
