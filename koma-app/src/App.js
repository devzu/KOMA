
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
import './main.css'


// **--DEL TVÅ--**
// Konstanter-> Våra delar utav sidorna. Dessa "laddar vi in" när vi trycker på dem.
   const Startsida = () => (
     <div>
       <h1 className="titleclass">Titel</h1>
       <ProfilePage/>
     </div>
   )

   const Knapp2 = () => (
     <div><h1 className="titleclass">Titel</h1>
       <CalendarPage/>
     </div>
   )

   const Knapp3 = () => (
     <div><h1 className="titleclass">Titel</h1>
     <TipsPage/></div>
   )

   const TestSida = () => (
     <div><h1 className="titleclass">Titel</h1>
     <HelloWorldText/></div>
   )


const MainMenu = () => {
 return (
   
   <div className="navbar container">
     <div className="row"><Link to="/">
     <button className="menubutton dissapear col self-align-center poop"><span className="glyphicon glyphicon-stats dissapear"></span></button>
     </Link></div> 
     
     <div className="row"><Link to="/knapp2">
     <button className="menubutton dissapear col"><span className="glyphicon glyphicon-calendar dissapear"></span></button>
     </Link></div>
     
     <div className="row">
     <Link to="/knapp3">
     <button className="menubutton dissapear col"><span className="glyphicon glyphicon-education dissapear"></span></button>
     </Link></div>

   </div>
 );
};

   class App extends Component 
   {
     render() 
     {
       return (
           <Router>
             <div> {/* OUTERMOST DIV INSIDE ROUTER */}

             {/* DIV ROW FOR BOOSTRAP COL */}
           <div className="row">

             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
           {/* APP-CLASSNAME START */}
             <div className="App col-s-12">

             {/* ////PART ONE//// */}
              {/* HEADER CLASSNAME START */}
               <div className="App-header col-1">

                 {/* LOGO */}
                   <Link to="/TestSida"><div className="Bild"><img src={logo} className="App-logo" alt="logo" /></div></Link>
                 {/* END LOGO */}

                 {/* MAINMENU FUNCTION */}
                   <MainMenu />
                 {/* END MAINMENU FUNCTION */}

               </div>
               {/* HEADER CLASSNAME END */}

               {/* ////PART TWO//// */}
               {/* CONTENT  */}
               <div className="ContentanAvTentan col-s-11">
                 <Route exact path="/" component={Startsida} />
                 <Route exact path="/knapp2" component={Knapp2} />
                 <Route exact path="/knapp3" component={Knapp3} />
                 <Route exact path="/TestSida" component={TestSida} />
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
