import React, { Component } from 'react';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// POP-UP-klassen
class Popup extends React.Component {
  
    state = {
        counter: 0,
        goalFields: []
    };

    createField() {
        
    }
    
    // Arrow function
    addGoal = () => {
        this.setState({ 
            counter: this.state.counter +  1 
        });
        
    } 
    
    render() {
        
         let classes = 
            (this.state.counter === 0) ?
           "orange" : "lightblue";
 
        return (
          <div className='popup'>
            <div className='popup_inner'>

                <h1>{this.props.text}</h1>

                <button onClick={this.addGoal}>
                Lägg till nytt delmål
                </button>
                
                {/* tag.id om man vill ha ett objekt (!!!) */}
                {this.state.goalFields.map(tag => 
                <textarea key={tag} >{ "Skriv ngt" }</textarea>)}
                
                <h5>
                    Antal mål: {this.state.counter}
                </h5>

                <button onClick={this.props.closePopup}>KLAR</button>
            
            </div>
          </div>

        );
  }
 

}


class ProfilePage extends React.Component {
    
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
      <div>
        
        <h1>Välkommen</h1>
        
        <button onClick={this.togglePopup.bind(this)}>
            Nytt mål
        </button>
        
        {/* Se detta som en if-sats:
        // om showPopup == true, gör det som syns: 
        // Annars, gör ingenting (null)*/}
        {this.state.showPopup ? 
          <Popup
            text='Skapa ett nytt mål'
            closePopup={this.togglePopup.bind(this)} 
          />
          : null
        }

      </div>
    );
  }
};

export default ProfilePage;