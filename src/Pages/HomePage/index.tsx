import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import Bio from "Components/bio/Bio";
import Header from "Components/header/Header";
// import Projects from "Components/projects/Projects";
// import ContactPage from "Components/contact/Contact";
import PageNotFound from "Components/pagenotfound/PageNotFound";
import { AnimatePresence } from "framer-motion"

const Bio = React.lazy(() => import('Components/bio/Bio'));
const Projects = React.lazy(() => import('Components/projects/Projects'));
const Contact = React.lazy(() => import('Components/contact/Contact'));

export default function Home() {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={
					<Header />
				} />
				<Route path="/about" element={
					<React.Suspense fallback={<>...</>}>
						<Bio />
					</React.Suspense>
				} />

				<Route path="/projects" element={
					<React.Suspense fallback={<>...</>}>
						<Projects />
					</React.Suspense>
				} />

				<Route path="/contact" element={
					<React.Suspense fallback={<>...</>}>
						<Contact />
					</React.Suspense>
				} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</AnimatePresence>
	);
}
