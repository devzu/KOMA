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
            Hejsan hoppsan KOMPISAr säger hanna o tilda
          </p>
          <a
            className="Tryck INTE på MIG om du är FEG"
            href="https://www.youtube.com/watch?v=zf_ALHd538M&"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tryck INTE på MIG om du är FEG
          </a>
        </header>
      </div>
    );
  }
}

export default App;
