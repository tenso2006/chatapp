import React, { Component } from 'react';
import './App.css';
import MessagePane from './MessagePane/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessagePane />
      </div>
    );
  }
}

export default App;
