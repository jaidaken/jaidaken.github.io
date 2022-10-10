
import Nav from "Components/nav/Nav";
import HomePage from "Pages/HomePage"
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";


function App() {
	return (

		<BrowserRouter>
			<Nav />
			<HomePage />
		</BrowserRouter>
	);
}

export default App;
