import React, { useState, useEffect, useContext } from 'react';
import Matrix from './Matrix.jsx';
import './transition.css';
import { MouseParallax, ScrollParallax } from "react-just-parallax";

function Transition() {

	// const [offsetY, setOffsetY] = useState(0);
	// const handleScroll = () => setOffsetY(window.scrollY);

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll)

	// 	return () => window.removeEventListener('scroll', handleScroll);
	// }, []);

	return (
		<section
			className="matrix parallax"
		>
			<div className="matrix-container">
				<svg className="topgrad" id="topgrad" width="100%" height="100">
					<defs>
						<linearGradient id="0" x1="0.5" y1="1" x2="0.5" y2="0">
							<stop offset="0%" stopColor="rgba(26, 33, 45, 0)" />
							<stop offset="80%" stopColor="hsl(240, 21%, 16%)" />
							<stop offset="100%" stopColor="hsl(240, 21%, 16%)" />
						</linearGradient>
					</defs>
					<rect fill="url(#0)" height="100" width="100%" />
				</svg>
				<MouseParallax isAbsolutelyPositioned strength={0.1}>
					<div className="matrix-bottom first">

						<Matrix
							// style={{ transform: `translateY(${offsetY * 0.2}px)` }}
							color='rgb(194, 254, 190)'
							backgroundColor="rgba(0,0,0,0)"
							fontSize={8}
							colSize={10}
							width={2500}
							height={1500}
							speed={0.4}
							fadeRate={0.2}
							maxLag={22}
							frequency={0.009}
							// zIndex={5}
						/>

					</div>
				</MouseParallax>
				<MouseParallax isAbsolutelyPositioned strength={0.2}>
					<div className="matrix-second second">

						<Matrix
							// style={{ transform: `translateY(${offsetY * 0.6}px)` }}
							color='rgb(128, 255, 145)'
							backgroundColor='rgba(0,0,0,0)'
							fontSize={12}
							colSize={20}
							width={2500}
							height={1500}
							speed={0.2}
							fadeRate={0.2}
							maxLag={18}
							frequency={0.008}
							// zIndex={6}
						/>

					</div>
				</MouseParallax>
				<MouseParallax isAbsolutelyPositioned strength={0.3}>
					<div className="matrix-third">

						<Matrix
							// style={{ transform: `translateY(${offsetY * 1}px)` }}
							color='rgb(78, 226, 58)'
							backgroundColor='rgba(0,0,0,0)'
							fontSize={18}
							colSize={30}
							width={2500}
							height={1500}
							speed={0.3}
							fadeRate={0.18}
							maxLag={14}
							frequency={0.005}
							// zIndex={7}
						/>

					</div>
				</MouseParallax>
				<MouseParallax isAbsolutelyPositioned strength={0.4}>
					<div className="matrix-last">

						<Matrix
							// style={{ transform: `translateY(${offsetY * 1.4}px)` }}
							color='rgb(106, 255, 0)'
							backgroundColor='rgba(0,0,0,0)'
							fontSize={28}
							colSize={30}
							width={2500}
							height={1500}
							speed={0.4}
							fadeRate={0.15}
							maxLag={10}
							frequency={0.002}
							// zIndex={8}
						/>

					</div>
				</MouseParallax>
				<svg className="bottomgrad" id="bottomgrad" width="100%" height="100">
					<defs>
						<linearGradient id="1" x1="0.5" y1="0" x2="0.5" y2="1">
							<stop offset="0%" stopColor="rgba(26, 33, 45, 0)" />
							<stop offset="80%" stopColor="hsl(240, 21%, 16%)" />
							<stop offset="100%" stopColor="hsl(240, 21%, 16%)" />
						</linearGradient>
					</defs>
					<rect fill="url(#1)" height="100" width="100%" />
				</svg>
			</div>
		</section>
	)
}

export default Transition
