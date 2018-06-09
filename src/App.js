import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hjhkjj</h1>
        <Person name="BHJBJ" age="25"/>
        <Person name="JBJ" age="55">My Hobbies</Person >
        <Person name="PKPP" age="15"/>
      </div>
    );
  }
}

export default App;
