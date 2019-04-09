import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    greeting: "Greetings Earthling"
  };

  greet = () => {
    this.setState({ greeting: "Hello Web XVII" });
  };

  bye = () => {
    this.setState({ greeting: "Goodbye Web XVII" });
  };
  render() {
    return (
      <>
        <h2>Hello World</h2>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Bye</button>
        <div>{this.state.greeting}</div>
      </>
    );
  }
}

export default App;
