
import Nav from "./Components/nav";
import HomePage from "./Pages/HomePage"
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
