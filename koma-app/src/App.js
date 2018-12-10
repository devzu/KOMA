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
      <div>
        <ProfilePage/>
      </div>
    )

    const Knapp2 = () => (
      <div>
        <CalendarPage/>
      </div>
    )

    const Knapp3 = () => (
      <TipsPage/>
    )


const MainMenu = () => {
  return (
    
    <div className="navbar">
           
      <Link to="/">
        <button className="menubutton dissapear"><span className="glyphicon glyphicon-stats dissapear"></span></button>
      </Link> 
      
      <Link to="/knapp2">
        <button className="menubutton dissapear"><span className="glyphicon glyphicon-calendar dissapear"></span></button>
      </Link>

      <Link to="/knapp3">
        <button className="menubutton dissapear"><span className="glyphicon glyphicon-education dissapear"></span></button>
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
                <div> 
                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
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
                    </div>
                  </div> 
                </div>
            </Router
            >
            
              <div> {/* OUTERMOST DIV INSIDE ROUTER */}

              {/* DIV ROW FOR BOOSTRAP COL */}
            <div className="row">

              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
            {/* APP-CLASSNAME START */}
              <div className="App col-s-12">

              {/* ////PART ONE//// */}
               {/* HEADER CLASSNAME START */}
                <header className="App-header col-s-1">

                  {/* LOGO */}
                    <div className="Bild"><img src={logo} className="App-logo" alt="logo" /></div>
                  {/* END LOGO */}

                  {/* MAINMENU FUNCTION */}
                    <MainMenu />
                  {/* END MAINMENU FUNCTION */}

                </header>
                {/* HEADER CLASSNAME END */}

                {/* ////PART TWO//// */}
                {/* CONTENT  */}
                <div className="ContentanAvTentan col-s-11">
                  <Route exact path="/" component={Startsida} />
                  <Route exact path="/knapp2" component={Knapp2} />
                  <Route exact path="/knapp3" component={Knapp3} />
                  {/* END CONTENT */}
              
                </div>

              </div>{/* END APP-CLASSNAME START */}

            
              {/* END ROW, END CONTAINER */}
            </div>

            {/* OCEAN WAVE */}
            <div className="app-wave"><div className="ocean">
              <div className="wave"></div>
              <div className="wave"></div></div></div> 
              {/* OCEAN WAVE END*/}

            {/* END OUTERMOST DIV CONTAINER BEFORE ROUTER */}
            </div>
            </Router>
        );
      }
    }

    export default App;