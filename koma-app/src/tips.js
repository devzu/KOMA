import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css';


const TipsPage = () => ( 
    <div><Tips/></div>
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
        ROLL THE DICE
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
            Två knapp
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

class Tips extends React.Component{
    
    render(){
        return ( <div>

 <div className="containWithStuff"> <div className="Blue col-s-9 offset-s-3">
 <h1 className="page-title"> Studieteknik? Ja, tack. </h1>

 <div className="studieBar col-s-10 offset-s-2"><p itemID="tipsText"> Har du svårt att hålla motivationen? Börjar du procrastinera så fort du får chansen?
     No worries. Vi har samlat lite tips och tricks på studieteknik, som kanske kan hjälpa dig hålla fokus. 
     
 </p>
 
                
                    <div> VIDEO </div>
                          
                        <a class="studie" href="https://www.youtube.com/watch?v=pZgMpjjgCRA">
                            <div>
                                Improving Cornell Notes With Sketchnoting Techniques
                            </div>
                        </a>
                        <a class="studie" href="https://www.youtube.com/watch?v=IlU-zDU6aQ0&t">
                            <div>
                                Study Less Study Smart
                            </div>
                        </a>
                    
                    <div> HEMSIDA </div>
                        <a class="studie" href="https://collegeinfogeek.com/">
                            <div>
                                College info geek
                            </div>
                        </a>
                        <a class="studie" href="https://www.uu.se/en/students/support-and-services/health-care/study-techniques/">
                            <div>
                                Find the study technique that works best for you
                            </div>
                        </a>
                
                        <a class="studie" href="https://www.oxfordlearning.com/how-to-study-effectively/">
                            <div>
                                How to study effectively
                            </div>
                        </a>
                
                    <div> BÖCKER </div>
                        <a class="studie" href="https://www.adlibris.com/se/bok/plugga-smart-och-lar-dig-mer-9789144017259?gclid=Cj0KCQiA3b3gBRDAARIsAL6D-N8Ix2pjm2oJTAL1C8oHhxy5TCW8TR1fnTqlMM7voWIU3rfA-0WF4pgaAs9mEALw_wcB">
                            <div>
                               Plugga smart och lär dig mer!
                            </div>
                        </a>
                        <a class="studie" href="https://www.bokus.com/bok/9780812981605/power-of-habit/">
                            <div>
                                Power Of Habit
                            </div>
                        </a>
                    <div> APPAR </div>
                        <a class="studie" href="https://www.forestapp.cc/en/">
                            <div>
                                Forest: Stay focused
                            </div>
                        </a>
                    
                    </div>
                </div>

            </div>

        </div>
       

            
        )
    }
}

export default TipsPage;