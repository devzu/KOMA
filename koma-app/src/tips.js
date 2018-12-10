import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css';
const TipsPage = () => ( 
    <div className="row">
 <div className="containWithStuff col-xl-12"> <div className="Blue col-s-9 offset-s-3">
 <h1 className="page-title"> Studieteknik? Ja, tack. </h1>

 <div className="studieBar col-s-10 offset-s-2"><p itemID="tipsText"> Har du svårt att hålla motivationen? Börjar du procrastinera så fort du får chansen?
     No worries. Vi har samlat lite tips och tricks på studieteknik, som kanske kan hjälpa dig hålla fokus. 
     
 </p>

    {/* ROW MENU BUTTONS WOOP WOOP */}
    <div className="row">
{/*                 
                <div className="studieBarCol col"><button className="button">Videor</button></div>
                <div className="studieBarCol col"><button className="button">Produktivitet</button></div>
                <div className="studieBarCol col"><button className="button">Appar</button></div>
                <div className="studieBarCol col"><button className="button">Hemsidor</button></div> */}
                <VideoContent/>
                <ProdContent/>

                    <div className="container"> 
                        <div className="row">
                            <div className="popup">
                                <div classname="popup-inner">
                                WITH THE WIND
                                <button classname="button" onClick=""></button>
                                </div>
                            </div>
                        </div> 
                    </div>
    </div>

                        <div className="VideoDescText col"><h3>Lorem Ipsum</h3><p>Väldigt informativ video om Lorem Ipsum</p>
                        </div> 

                    </div>
                </div>

            </div>

        </div>
);


class PopupVideo extends React.Component{
    
    // Initial states of Popup:
    // Nollan counter, inga textfält (goalFields)
    state = {
        counter: 0,
        enableButton: true,
        goalFields: []
    };
    
    // Arrow function
    addGoal = () => {
        // Plussa på countern
        this.setState({ 
            counter: this.state.counter +  1,
            enableButton: false
        });
        // Kalla på createField
        this.createField(this);
        
    } 
    
    render() {
    {/**/}
        return (
          <div className='popup'>
            <div className='popup_inner'>

                 {/* CONTAINMENT WITH VIDEOS AND STUFF */}
    <div className="videosContainer">
        <div className="VideoBox row">  <div className="col">
        <iframe title="fuckIt" className="WhatEverBro" width="560" height="315" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div className="VideoDescText col"><h3>Lorem Ipsum</h3><p>Väldigt informativ video om Lorem Ipsum</p></div> </div>
    </div>

                

                <button 
                onClick={this.props.closePopup}>KLAR</button>
            
            </div>
          </div>

        );
  }
 

}

class PopupProd extends React.Component{
    
    // Initial states of Popup:
    // Nollan counter, inga textfält (goalFields)
    state = {
        counter: 0,
        enableButton: true,
        goalFields: []
    };
    
    // Arrow function
    addGoal = () => {
        // Plussa på countern
        this.setState({ 
            counter: this.state.counter +  1,
            enableButton: false
        });
        // Kalla på createField
        this.createField(this);
        
    } 
    
    render() {
    {/**/}
        return (
          <div className='popup'>
            <div className='popup_inner'>

                 {/* CONTAINMENT WITH VIDEOS AND STUFF */}
    <div className="videosContainer">
        <div className="VideoBox row">  <div className="col">
        <iframe title="fuckIt" className="WhatEverBro" width="560" height="315" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div className="VideoDescText col"><h3>Lorem Ipsum</h3><p>Väldigt informativ video om Lorem Ipsum</p></div> </div>
    </div>

                

                <button 
                onClick={this.props.closePopup}>KLAR</button>
            
            </div>
          </div>

        );
  }
 

}


class VideoContent extends React.Component {
    
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
    
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
    
  render() {
    return (
      <div className="col">
        <button onClick={this.togglePopup.bind(this)} className="button">
            En knapp
        </button>
        
        {/* Se detta som en if-sats:
        // om showPopup == true, gör det som syns: 
        // Annars, gör ingenting (null)*/}
        {this.state.showPopup ? 
          <PopupVideo
            closePopup={this.togglePopup.bind(this)} 
          />
          : null
        }

      </div>
    );
  }
}


class ProdContent extends React.Component {
    
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
    
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
    
  render() {
    return (
      <div className="col">
        <button onClick={this.togglePopup.bind(this)} className="button">
            En knapp
        </button>
        
        {/* Se detta som en if-sats:
        // om showPopup == true, gör det som syns: 
        // Annars, gör ingenting (null)*/}
        {this.state.showPopup ? 
          <PopupProd
            closePopup={this.togglePopup.bind(this)} 
          />
          : null
        }

      </div>
    );
  }
}


export default TipsPage;