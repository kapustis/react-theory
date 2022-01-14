import React from "react";
import "./CarInfo.scss";
import { useLocation } from "react-router-dom";

const CarInfo = () => {
  let location = useLocation();

  return (
    <div className="CarInfo">
      <h1>car name: {location.state.name}</h1>
      <h2>Year : {location.state.year}</h2>
    </div>
  );
};

export default CarInfo;
