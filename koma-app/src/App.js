import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Soooop">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hejsan hoppsan KOMPISAr säger hanna
          </p>
          <a
            className="Tryck INTE på MIG om du är FEG"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
