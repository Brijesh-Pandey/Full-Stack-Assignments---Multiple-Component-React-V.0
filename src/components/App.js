import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 data-ns-test="project-name">Resume Builder</h1>
        <p data-ns-test="project-description">
          Automated resume builder project
        </p>
      </>
    );
  }
}

export default App;
