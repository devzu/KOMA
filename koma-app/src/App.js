import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Soooop">
        <h1 className="App"> 
        Slingerling AB
        </h1>
        <h3 className="App"> Det här kan vi göra för att hjälpa dig! </h3>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Satan på röven så fort det går!!

          </p>
          <a
            className="Tryck INTE på MIG om du är FEG"
            href="https://www.youtube.com/watch?v=c3c3UTYNZ6Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tryck här för det vi kan göra för dig
          </a>
        </header>
      </div>
    );
  }
}

export default App;
