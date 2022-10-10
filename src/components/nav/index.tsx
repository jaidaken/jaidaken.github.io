import "./nav.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function goToTop() {
	document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};


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
					<Link to="/" onClick={goToTop}> Home </Link>
					<Link to="/about" onClick={goToTop}> About </Link>
					<Link to="/projects" onClick={goToTop}> Projects </Link>
					<Link to="/contact" onClick={goToTop}> Contact </Link>
				</div>
			</div>
		</div>
	);
}

export default Nav;
