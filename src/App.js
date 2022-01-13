import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About/About";
import Cars from "./Cars/Cars"
// import logo from './logo.svg';
import "./App.scss";

class App extends Component {
  render() {
    return (
  
        <div className="container">
          <div className="row">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/cars">Cars</Link>
                </li>
              </ul>
            </nav>
          </div>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
          </Routes>
        </div>

    );
  }
}

export default App;
