import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./quotes.js";

class App extends Component {
  state = { working: true };

  changeClass = () => {
    this.setState({
      working: !this.state.working
    });
  };

  changeClassString = () => {
    const className = this.state.working === true ? "working" : "notworking";
    return className;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className={this.changeClassString()}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <button
            class="ui active button yellow"
            style={{ margintop: "10px" }}
            onClick={this.changeClass}
          >
            <i class="user icon"></i>
            Click to change whether Homer is working
          </button>
        </header>

        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;
