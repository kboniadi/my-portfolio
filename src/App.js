import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavBar from "components/NavBar";
import HomePage from "components/HomePage"

function App() {
  return (
    <div className="App">
      <div className="main-menu">
        <NavBar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
