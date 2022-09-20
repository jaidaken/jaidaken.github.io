import "./nav.css";
import {
	AiOutlineFundProjectionScreen,
	AiOutlineHome,
	AiOutlineMessage,
	AiOutlineMenu
} from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion"; <p>
</p>
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
	const [expandNavbar, setExpandNavbar] = useState(false);

	const location = useLocation();

	useEffect(() => {
		setExpandNavbar(false);
	}, [location]);

	return (
		<div className="navbar" id={expandNavbar ? "open" : "close"}>
			<div className="float">
				<div className="links">
					<Link to="/"> Home </Link>
					<Link to="/about"> About </Link>
					<Link to="/projects"> Projects </Link>
					<Link to="/contact"> Contact </Link>
				</div>
			</div>
		</div>
	);
}

export default Nav;
