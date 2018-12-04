
//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//
//class App extends Component {
//  render() {
//    return (
//      <div className="Soooop">
//        <h1 className="App"> 
//        HEJ LOSERS, I LOVE YOU ALL
//        </h1>
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Hejsan kul dhsjvv
//
//          </p>
//          <a
//            className="Tryck INTE på MIG om du är FEG"
//            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Tryck INTE på MIG om du är FEG
//          </a>
//        </header>

// **----- DEL 1 -----**
//IMPORTERA VIKTIGA SAKER

 import React, { Component } from 'react';
 import logo from './image/logo.svg';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './App.css';
 import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 import MainPage from './mainpage.js';
 import CalendarPage from './calendar.js';
 import ProfilePage from './profile.js';
 import TipsPage from './tips.js';
 import HelloWorldText from './b.js';


// **--DEL TVÅ--**
// Konstanter-> Våra delar utav sidorna. Dessa "laddar vi in" när vi trycker på dem.
    const Startsida = () => (
      <div> hhhhh
        <HelloWorldText />
</div>
    )
// ignorera namnen just nu ok
    const Knapp2 = () => (
      <div>
        <MainPage/>
      </div>
    )

    const Knapp3 = () => (
      <CalendarPage/>
    )

    const Knapp4 = () => (
      <div>
        <ProfilePage/>
      </div>
    )

    const Knapp5 = () => (
      <div>
       <TipsPage/>
      </div>
    )

const MainMenu = () => {
  return (
    <div className="navbar">
      
      <Link to="/">
        <button className="menubutton dissapear"><span className="glyphicon glyphicon-stats dissapear"></span></button>
      </Link>
      <Link to="/knapp2">
        <button className="menubutton dissapear"><span className="glyphicon glyphicon-pencil dissapear"></span></button>
      </Link>
      <Link to="/knapp3">
        <button className="menubutton dissapear"><span className="glyphicon glyphicon-calendar dissapear"></span></button>
      </Link>
      <Link to="/knapp4">
        <button className="menubutton dissapear"><span className="glyphicon glyphicon-send dissapear"></span></button>
      </Link>
      <Link to="/knapp5">
        <button className="menubutton dissapear"><span className="glyphicon glyphicon-cog dissapear"></span></button>
      </Link>
    </div>
  );
};

    class App extends Component 
    {
      render() 
      {
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
              <div className="app-wave"><div className="ocean">
              <div className="wave"></div>
              <div className="wave"></div>
                </div>
              </div>
              </div> </div>
            </Router>
        );
      }
    }

    export default App;