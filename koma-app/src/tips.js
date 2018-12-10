import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css';
const TipsPage = () => ( 
<<<<<<< HEAD
<div className="row">
    <div className="containWithStuff col-xl-12"> 
        <div className="mittenBox col-s-9 offset-s-3">
            <h1 className="page-title"> Studieteknik? Ja, tack. </h1>
            <div className="studieBar col-s-10 offset-s-2">
                <p itemID="tipsText">
                Har du svårt att hålla motivationen? Börjar du procrastinera så fort du får chansen?
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
                    <div className="VideoBox row">

                        <div className="col">
                            <iframe title="fuckIt" className="WhatEverBro" width="560" height="315" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
=======
    <div className="row">
 <div className="containWithStuff col-xl-12"> <div className="Blue col-s-9 offset-s-3">
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
>>>>>>> d0b1b82a2b1b2c092970d3f7df12edcddd3e64d2

                        <div className="VideoDescText col"><h3>Lorem Ipsum</h3><p>Väldigt informativ video om Lorem Ipsum</p>
                        </div> 

                    </div>
                </div>

            </div>

        </div>
    </div>
<<<<<<< HEAD
=======
    <TipsContainment/>
 
 </div>
 </div>
   
</div>
>>>>>>> d0b1b82a2b1b2c092970d3f7df12edcddd3e64d2
</div>
);
class Popup extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.progressValue = 0;
        
        this.state = {
        counter: 0,
        enableButton: true,
        goalFields: [],
        message: '',
        value: '' }
        
        // Att göra detta är bra!!
        // Varför? Ingen vet...
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getInfo = this.getInfo.bind(this);

        
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});  
    }
    
    handleSubmit(event) {
        this.setState(
            {message: this.state.value,
             counter: this.state.counter +  1,
             enableButton: false}
        );
        this.progressValue += 1;
        event.preventDefault();
    }
    
    getInfo() {
        
        this.setState({
            value: ""
        });
    }

    render(){
        return (
            <div className="popup">SOOP</div>
        )

            }
}   

class TipsContainment extends React.Component {

    constructor() {
        //super();
        //this.state = {
        //  showPopup: false
        // };
        super();
    
        this.progressValue = 0;
    
        this.state = {
        counter: 0,
        enableButton: true,
        showPopup: false,
        goalFields: [],
        message: '',
        valuue: '', 
        goals : {'goal1' : 'blob'}}
    
        // Att göra detta är bra!!
        // Varför? Ingen vet...
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
}
togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
}

handleChange(event) {
    this.setState({value: event.target.value});  
}

handleSubmit(event) {
    let {message} = event.target;
    
    this.setState(
        {message: this.state.value,
         counter: this.state.counter +  1,
         enableButton: false,
        [message]: message}
    );
    this.progressValue += 1;
    event.preventDefault();
    
    
}

getInfo() {
    this.setState({
        message: this.state.value
        //value: ""
    });
    
}
render() {

    return (<div>poop</div>)

   }



}
export default TipsPage;