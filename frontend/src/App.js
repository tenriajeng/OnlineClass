import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import Base from "./view/admin/layouts/Base";
import HomeBase from "./view/home/layouts/Base";
import NavbarComponent from "./Components/Navbar";
import HomePage from "./view/home/homePage/HomePage";

import FooterUserComponent from "./Components/FooterUserComponent";
import CardComponent from "./view/home/homePage/CardComponent";
import HeaderPageComponent from "./view/home/coursesPage/HeaderPageComponent";
import CoursesCardComponent from "./view/home/coursesPage/CoursesCardComponent";
import CoursesDetail from "./view/home/coursesPage/CoursesDetail";

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
				<Route exact path="/courses">
					<NavbarComponent />
					<HeaderPageComponent />
					<CoursesCardComponent />
					<FooterUserComponent />
				</Route>
				<Route path="/courses/:indetifier">
					<NavbarComponent />
					<CoursesDetail />
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
