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

            Hej och välkommen till denna sida. Denna sida är du välkommen till. Till just DENNA sida är du välkommen. DU är välkommen till denna sida. Sidan du befinner dig på är du välkommen till.

          </p>
          <a
            className="Tryck INTE på MIG om du är FEG"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
