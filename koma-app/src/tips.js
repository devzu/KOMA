import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css';
const TipsPage = () => ( 
    <div className="row">
 <div className="containWithStuff col-xl-12"> <div className="mittenBox col-s-9 offset-s-3">
 <h1 className="page-title"> Studieteknik? Ja, tack. </h1>

 <div className="studieBar col-s-10 offset-s-2"><p itemID="tipsText"> Har du svårt att hålla motivationen? Börjar du procrastinera så fort du får chansen?
     No worries. Vi har samlat lite tips och tricks på studieteknik, som kanske kan hjälpa dig hålla fokus. 
     
 </p>

    {/* ROW MENU BUTTONS WOOP WOOP */}
    <div className="row">
                <div className="studieBarCol col"><button className="button">Videor</button></div>
                <div className="studieBarCol col"><button className="button">Produktivitet</button></div>
                <div className="studieBarCol col"><button className="button">Appar</button></div>
                <div className="studieBarCol col"><button className="button">Hemsidor</button></div>
    </div>

    {/* CONTAINMENT WITH VIDEO AND STUFF */}
    <div className="videosContainer">
        <div className="VideoBox row">  <div className="col">
        <iframe title="fuckIt" className="WhatEverBro" width="560" height="315" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div className="VideoDescText col"><h3>Lorem Ipsum</h3><p>Väldigt informativ video om Lorem Ipsum</p></div> </div>
    </div>
 
 </div>
 </div>
   
</div>
</div>
);

export default TipsPage;