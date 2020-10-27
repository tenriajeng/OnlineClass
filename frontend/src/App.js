import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import Base from "./view/admin/layouts/Base";
import HomeBase from "./view/home/layouts/Base";
import NavbarComponent from "./Components/Navbar";

class App extends React.Component {
	render() {
		return (
			<div>
				<Route exact path="/">
					<HomeBase />
				</Route>
				<Route path="/admin">
					<Base />
				</Route>
			</div>
		);
	}
}

export default App;
