import React, { Component } from 'react';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => ( 
<div className="containWithStuff">
    <div className="mittenBox col-md-6 col-md-offset-3">
    
    <ProfilePageContent/>
    
    </div> 
   
</div>

);

class Popup extends React.Component{
    
    // Initial states of Popup:
    // Nollan counter, inga textfält (goalFields)
    state = {
        counter: 0,
        enableButton: true,
        goalFields: []
    };
    
    // Skapar textfält
    createField() {
        
        const item = this.state.goalFields;
        
        // Detta är tydligen viktigt?
        item.push({});
        
        this.setState({goalFields: item});
    }
    
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

                <h1>Skapa ett nytt mål</h1>

                <button onClick={this.addGoal}>
                Lägg till nytt delmål
                </button>

                {/* Denna kan kortas ned, men hur? 
                {this.state.goalFields.map((item, index) => {
                  return (
                    <div className="box" key={index}>
                        <div>
                       </div>
                    </div>
                  )
                })} 
                */}
                
                
                {this.state.goalFields.map(tag => 
                    <textarea key={this.state.counter} placeholder={ "Namn på mål: " + this.state.counter}></textarea>
                    
                )}
                
                <h5>
                    Antal mål: {this.state.counter}
                </h5>

                <button 
                disabled={this.state.enableButton} 
                onClick={this.props.closePopup}>KLAR</button>
            
            </div>
          </div>

        );
  }
 

}


class ProfilePageContent extends React.Component {
    
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
            closePopup={this.togglePopup.bind(this)} 
          />
          : null
        }

      </div>
    );
  }
}

export default ProfilePage;