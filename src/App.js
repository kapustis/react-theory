import React, { Component } from "react";
import "./App.scss";
import { Route, Routes, NavLink } from "react-router-dom";
import About from "./About/About";
import Cars from "./Cars/Cars";
import Home from "./Home/Home";
import  NoMatch  from "./NoMatch/NoMatch";
import CarInfo from "./Cars/Car/CarInfo/CarInfo";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact="true">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/cars">Cars</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars/:carID" element={<CarInfo />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="*" element={<NoMatch />}/>                            
        </Routes>
      </div>
    );
  }
}

export default App;
