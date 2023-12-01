import React, { Component } from "react";

export default class state extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="countNumber">
        <h1>count:{count}</h1>
        <button className="btnOne" onClick={this.increment}>
          {" "}
          +{" "}
        </button>
        <button
          className="btnTwo"
          onClick={this.decrement}
          disabled={count === 0 ? true : false}
        >
          {" "}
          -{" "}
        </button>
      </div>
    );
  }
}
