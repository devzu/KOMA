import React, { Component } from 'react';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TipsPage from './tips';

const CalendarPage = () => ( 
 <div className="content-box">
 <h1 className="page-title">Kalendar</h1>
        <div className="mittenBox"> <TipsContent/>
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
    
                    <h1>Här finns massa text</h1>
    
                    
    
                    <button 
                    onClick={this.props.closePopup}>KLAR</button>
                
                </div>
              </div>
    
            );
      }
     
    
    }
    
    
    class TipsContent extends React.Component {
        
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
            
            <h1>Nejmen</h1>
            
            <button onClick={this.togglePopup.bind(this)}>
                En knapp
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
    
export default CalendarPage;