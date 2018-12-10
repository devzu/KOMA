import React, { Component } from 'react';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const TipsPage = () => ( 
 <div className="containWithStuff col-xl-12"> <div className="mittenBox col-s-9 offset-s-3">
 <h1 className="page-title"> Studieteknik? Ja, tack. </h1>

 <div className="studieBar col-s-10 offset-s-2 row"><p itemID="tipsText"> Har du svårt att hålla motivationen? Börjar du procrastinera så fort du får chansen?
     No worries. Vi har samlat lite tips och tricks på studieteknik, som kanske kan hjälpa dig hålla fokus. 
     
 </p>
                <div className="studieBarCol col">Videor</div>
                <div className="studieBarCol col">Produktivitetstips</div>
                <div className="studieBarCol col">3</div>
                <div className="studieBarCol col">4</div>
 </div>
 </div>
   
</div>

);

export default TipsPage;