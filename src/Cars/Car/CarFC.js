import React from "react";
import "./Car.scss";
import { useNavigate } from "react-router-dom";

function CarFC(props) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/cars/${props.car.id}`, { state: props.car });
  }

  return (
    <div className="Car" >
      <h3 
      className={"text-warning name"}
      onClick={handleClick}
      >
        Сar name: {props.car.name}
        </h3>
      <p>
        Year: <strong>{props.car.year}</strong>
      </p>

      <button
        className={"btn btn-outline-warning"}
        onClick={props.onChangeTitle}
      >
        Set title name car
      </button>

      <div className={"input-group"}>
        <input
          className={"form-control"}
          type="text"
          onChange={props.onChangeName}
          value={props.car.name}
        />
      </div>

      <button className={"btn btn-outline-danger"} onClick={props.onDelete}>
        Delete Car
      </button>
    </div>
  );
}

export default CarFC;
