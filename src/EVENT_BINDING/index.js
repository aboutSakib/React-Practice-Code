import { Component } from "react";

export default class EVENT_BINDING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.clickDecrease = this.clickDecrease.bind(this);
  }

  //without binding & using js es6
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  //with binding
  clickDecrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>increase </button>
        <button onClick={this.clickDecrease}>Decrease</button>
      </div>
    );
  }
}
