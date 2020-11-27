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
import NewNavbar from "./Components/NewNavbar";
import InteractiveHeaderPageComponent from "./view/home/interactiveCoursesPage/InteractiveHeaderPageComponent";
import InteractiveCoursesCardComponent from "./view/home/interactiveCoursesPage/InteractiveCoursesCardComponent";
import InteractiveCoursesDetail from "./view/home/interactiveCoursesPage/InteractiveCoursesDetail";
import NewFooter from "./Components/NewFooter/Footer";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* user route */}
                    <Route exact path="/">
                        <NewNavbar />
                        <HomePage />
                        <NewFooter />
                    </Route>

                    <Route path="/home">
                        <NewNavbar />
                        <HomePage />
                        <NewFooter />
                    </Route>

                    <Route exact path="/courses">
                        <NewNavbar />
                        <HeaderPageComponent />
                        <CoursesCardComponent />
                        <NewFooter />
                    </Route>

                    <Route exact path="/interactive-courses">
                        <NewNavbar />
                        <InteractiveHeaderPageComponent />
                        <InteractiveCoursesCardComponent />
                        <NewFooter />
                    </Route>
                    <Route path="/interactive-courses/:indetifier">
                        <NewNavbar />
                        <InteractiveHeaderPageComponent />
                        <InteractiveCoursesDetail />
                        <NewFooter />
                    </Route>
                    <Route path="/team">
                        <NewNavbar />
                        <TeamCardComponet />
                        <NewFooter />
                    </Route>
                    <Route path="/courses/:indetifier">
                        <NewNavbar />
                        <HeaderPageComponent />
                        <CoursesDetail />
                        <NewFooter />
                    </Route>
                    <Route path="/login">
                        <NewNavbar />
                        <Login />
                        <NewFooter />
                    </Route>
                    <Route path="/register">
                        <NewNavbar />
                        <Register />
                        <NewFooter />
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
