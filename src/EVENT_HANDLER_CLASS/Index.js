import React, { Component } from "react";

export default class IndexHandeler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({ changedValue: e.target.value }, () => {
      console.log(this.state.changedValue);
    });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <h1>{this.state.changedValue}</h1>
      </div>
    );
  }
}
