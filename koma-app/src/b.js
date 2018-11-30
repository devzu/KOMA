import React, { Component } from 'react';
const HelloWorldText = () => ( 
 <div className="containWithStuff">
    <div className="welcome">
        <h1 className="welcome">Välkommen <i>Namn</i></h1>
    </div>
    
    <div className="calendar">
        <div height="200"><i>Kalendern</i></div>
        <div><i><p>Lista med mål</p><li>hej</li><li>hej hej</li></i></div>
    </div>
    
    <div className="progress_ov">
        <h2>Dina aktiva kurser</h2>
        
        <div className="progress_ind">
            <h3>Ämne 1</h3>
            <div className="bar"><i>(Bar-div)</i></div>
        </div>
        
        <div className="progress_ind">
            <h3>Ämne 2</h3>
            <div className="bar"><i>(Bar-div)</i></div>
        </div>
        
        <div className="progress_ind">
            <h3>Ämne 3</h3>
            <div className="bar"><i>(Bar-div)</i></div>
        </div>
    </div> 


</div>

);

export default HelloWorldText;