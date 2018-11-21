// **----- DEL 1 -----**
//IMPORTERA VIKTIGA SAKER

 import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 import HelloWorldText from './b.js';
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
        <HelloWorldText />

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