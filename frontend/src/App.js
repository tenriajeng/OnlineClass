import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Base from "./view/admin/layouts/Base";
import NavbarComponent from "./Components/Navbar";
import HomePage from "./view/home/homePage/HomePage";

import FooterUserComponent from "./Components/FooterUserComponent";
import HeaderPageComponent from "./view/home/coursesPage/HeaderPageComponent";
import CoursesCardComponent from "./view/home/coursesPage/CoursesCardComponent";
import CoursesDetail from "./view/home/coursesPage/CoursesDetail";
import Login from "./view/home/homePage/login";
import Register from "./view/home/homePage/register";
import TeamCardComponet from "./view/home/team/TeamCardComponet";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
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
                    <Route exact path="/team">
                        <NavbarComponent />
                        <TeamCardComponet />
                        <FooterUserComponent />
                    </Route>
                    <Route path="/courses/:indetifier">
                        <NavbarComponent />
                        <CoursesDetail />
                        <FooterUserComponent />
                    </Route>
                    <Route path="/login">
                        <NavbarComponent />
                        <Login />
                        <FooterUserComponent />
                    </Route>
                    <Route path="/register">
                        <NavbarComponent />
                        <Register />
                        <FooterUserComponent />
                    </Route>
                    {/* end user route */}
                </Switch>

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
