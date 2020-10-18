import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Base from "./view/admin/layouts/Base";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Base />
            </Router>
        );
    }
}

export default App;
