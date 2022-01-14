import React from "react";
import "./Home.scss";

const Home = (props) => (
  <div className="Home">
    <h1>Welcome to the Home app!</h1>

    <p>
      This example demonstrates how you can stitch two React Router apps
      together using the <code>`basename`</code> prop on{" "}
      <code>`BrowserRouter`</code> and <code>`StaticRouter`</code>.
    </p>
  </div>
);

export default Home;
