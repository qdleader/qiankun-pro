import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter } from "react-router-dom"
import Router from "./router/index.tsx"
import React from "react"
import { Link } from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				app 1

				<div>
					{/* <Link to="/home"></Link> */}
					<Link to={"/home"}>react18 子应用 home</Link>
				</div>
			</header>
			{/* <HashRouter></HashRouter> */}
			{/* <BrowserRouter > */}
			<Router></Router>
			{/* </BrowserRouter> */}
		</div>
	);
}

export default App;
