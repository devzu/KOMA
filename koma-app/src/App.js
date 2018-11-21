
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Soooop">
        <h1 className="App"> 
        HEJ LOSERS, I LOVE YOU ALL
        </h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hejsan kul dhsjvv

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

// **----- DEL 1 -----**
//IMPORTERA VIKTIGA SAKER

 import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// **--DEL TVÅ--**
// Konstanter-> Våra delar utav sidorna. Dessa "laddar vi in" när vi trycker på dem.
    const Startsida = () => (
      <div>
        Sorry baes var tvungen att ta bort det roliga för att va SERRI
        insert graffffff
        och annat viktigt</div>
    )
// ignorera namnen just nu ok
    const Knapp2 = () => (
      <div>
        KNapp2
      </div>
    )

    const Knapp3 = () => (
      <div>
        Knapp3
      </div>
    )

    const Knapp4 = () => (
      <div>
        Knapp4
      </div>
    )

    const Knapp5 = () => (
      <div>
        いしいしいしいしいしいしいしいしいしいしいしいし
9f652768c1cd219a1f0519af447d319fbf835046
      </div>
    )

const MainMenu = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <button className="menubutton">home</button>
      </Link>
      <Link to="/knapp2">
        <button className="menubutton">Knapp2</button>
      </Link>
      <Link to="/knapp3">
        <button className="menubutton">knapp3</button>
      </Link>
      <Link to="/knapp4">
        <button className="menubutton">knapp4</button>
      </Link>
      <Link to="/knapp5">
        <button className="menubutton">knapp5</button>
      </Link>
    </div>
  );
};

    class App extends Component {
      render() {
        return (
          <Router>
            <div className="App">
              <header className="App-header">
                <div className="Bild"><img src={logo} className="App-logo" alt="logo" /></div>
                <MainMenu />
              </header>
              <div className="knappar">
                 <Route exact path="/" component={Startsida} />
            <Route exact path="/knapp2" component={Knapp2} />
            <Route exact path="/knapp3" component={Knapp3} />
            <Route exact path="/knapp4" component={Knapp4} />
            <Route exact path="/knapp5" component={Knapp5} />
              </div>
            </div>
          </Router>
        );
      }
    }

    export default App;