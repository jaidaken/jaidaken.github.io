
import { Routes, Route, useLocation } from "react-router-dom";

import Bio from "Components/bio/Bio";
import Header from "Components/header/Header";
import Projects from "Components/projects/Projects";
import ContactPage from "Components/contact/Contact";

import { AnimatePresence } from "framer-motion"


export default function Home() {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Header />} />
				<Route path="/about" element={<Bio />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
			</AnimatePresence>
	);
}
