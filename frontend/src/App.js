import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
// import Header from './components/Header';
import Router from "./router";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
