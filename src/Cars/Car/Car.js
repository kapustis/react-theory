import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Car.scss";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: null,
      name: null,
      year: null,
      date: new Date(),
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);

    this.setState((state, props) => {
      return {
        ID: props.car.id,
        name: props.car.name,
        year: props.car.year,
      };
    });

    if (this.props.index === 1) {
      this.inputRef.current.focus();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="Car">
        <h3 className={"text-warning"}>Сar name: {this.state.name}</h3>
        <p>
          Year: <strong>{this.state.year}</strong>
        </p>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>

        <button
          className={"btn btn-outline-warning"}
          onClick={this.props.onChangeTitle}
        >
          Set title name car
        </button>

        <div className={"input-group"}>
          <input
            ref={this.inputRef}
            className={"form-control"}
            type="text"
            onChange={this.props.onChangeName}
            value={this.props.car.name}
          />
        </div>

        <button
          className={"btn btn-outline-danger"}
          onClick={this.props.onDelete}
        >
          Delete Car
        </button>
      </div>
    );
  }
}

Car.propTypes = {
  index: PropTypes.number.isRequired,
  car: PropTypes.object.isRequired,
};
export default Car;
