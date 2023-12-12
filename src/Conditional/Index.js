import React, { Component } from "react";
import HomePage from "./Home";
import LoginPage from "./Login";

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    const element = isLoggedIn ? <HomePage /> : <LoginPage />;
    return <div>{element}</div>;
  }
}

export default IndexPage;
