import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import Base from "./view/admin/layouts/Base";
import HomeBase from "./view/home/layouts/Base";
import NavbarComponent from "./Components/Navbar";
import HomePage from "./view/home/homePage/HomePage";

import FooterUserComponent from "./Components/FooterUserComponent";

class App extends React.Component {
	render() {
		return (
			<div>
				{/* user route */}
				<Route exact path="/">
					<NavbarComponent />
					<HomePage />
					<FooterUserComponent />
				</Route>
				<Route path="/courses">
					<NavbarComponent />
					{/* <HomePage /> */}
					<FooterUserComponent />
				</Route>
				{/* end user route */}

				{/* admin route */}
				<Route path="/admin">
					<Base />
				</Route>
				{/* end admin route */}
			</div>
		);
	}
}

export default App;
