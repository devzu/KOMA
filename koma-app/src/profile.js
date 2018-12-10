import React, { Component } from 'react';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/****************************
*   GLOBALA VARIABLER TYP   *
*****************************/

const goalCounter = React.createContext('0');

/******************************
*  Här skickas innehållet på  * 
*  sidan till App.js          *
******************************/
const ProfilePage = () => ( 
<div className="containWithStuff">
    <div className="mittenBox">
    
    <ProfilePageContent/>
    
    </div> 
   
</div>

);


/******************************
*  KLASS FÖR PROGRESS-BAREN   *
******************************/
class ProgressBar extends React.Component {
    
    constructor(props) {
      super(props);  
    }
    
    // DU MÅSTE HÄMTA progressMax FRÅN POPUP
    state = {
        progressVal: 0,
        progressMax: this.props.max,
        enableButton: false,
        grattis: ""
    };

    updateProgress = () => {
        
        if (this.state.progressVal < this.state.progressMax) {
            
            this.setState({
                progressVal: 
                this.state.progressVal + 1
            }); 
        } 
        
        if (this.state.progressVal == this.state.progressMax - 1) {
            
            this.setState({
                grattis: "GRATTIS",
                disableButton: true
            });   
        }

    }
    

    render() {
        
        return(
        <div>
            <progress value={this.state.progressVal} max={this.state.progressMax}></progress>
                
            <button disabled={this.state.disableButton} onClick={this.updateProgress}>
            Mål!
            </button>
            
            <h4>{this.state.grattis}</h4>
            
        </div>
        );
    }
    
}


/******************************
*     KLASS FÖR POP-UPEN      *
******************************/
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

    /*
    createField() {
        
        const goal = this.state.goalFields;
        
        goal.push({});
        
        this.setState({goalFields: goal});
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
    */
    
    render() {
    {/**/}
        return (
          <div className='popup'>
            <div className='popup_inner'>

                <h1>Skapa ett nytt mål</h1>
{/*
                <button onClick={this.addGoal}>
                Lägg till nytt delmål
                </button>
            
                 Denna kan kortas ned, men hur? 
                {this.state.goalFields.map((item, index) => {
                  return (
                    <div className="box" key={index}>
                        <div>
                       </div>
                    </div>
                  )
                })}

                {this.state.goalFields.map(tag => 
                    <textarea key={this.state.counter} placeholder={ "Namn på mål: " + this.state.counter}></textarea>
                    
                )}
                
            
            {
            this.state.goalFields.map(tag => { 
                    return (
                        <textarea key={this.state.counter} placeholder={this.state.counter}>
                        
                        </textarea>
                )
                    
            })
            }
*/}
            
                <form onSubmit={this.handleSubmit}>

                    <input type="text" value={this.state.value} onChange={this.handleChange}/>

                    <input type="submit" onClick={this.getInfo} value="Nytt mål"/>

                </form>
            
            
                <h3>
                    <b>Mål:</b> <br/>
                    {this.state.message}
                    <br/>
                    <b>Antal klick: </b> <br/>{this.progressValue}
                </h3>

                <button 
                disabled={this.state.enableButton} 
                onClick={this.props.closePopup}>KLAR</button>
            
            <ProgressBar max={this.state.counter}/>
            
            </div>
          </div>

        );
  }
 

}

/******************************
*       SJÄLVA HEMSIDAN       *
******************************/
class ProfilePageContent extends React.Component {
    
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
  
    /*
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  } */
    
 /***********************
 * Funktioner för popup * 
 ***********************/
    
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
    
    addGoal(goal) {
     //create a unike key for each new fruit item
     var timestamp = (new Date()).getTime();
     // update the state object
     this.state.goals['goal-' + timestamp ] = goal;
     // set the state
     this.setState({ goals : this.state.goals });
    }
    
/*******************
*      RENDER      *
*******************/
    
  render() {
      console.log('togglePopup: ', this.state.showPopup)
      
    return (
      <div>
        
        <h1>Välkommen</h1>
        
        {/*DIV FÖR "NYTT MÅL"*/}
        <div className="">
            <button onClick={this.togglePopup}>
            Nytt mål! :)
            </button>
        </div>
        
        {/*DIV FÖR POPUP-FÖNSTRET*/}
        { this.state.showPopup ? 
        <div className="popup_inner">

            <GoalList goals={this.state.goals} />
            <AddGoalForm addGoal={this.addGoal} />
        {/*
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    
                <input type="submit" onClick={this.getInfo} value="Nytt mål"/>
            </form>
        */}

            <h3>
            <b>Mål:</b> <br/>
            <ul>
            <li>{this.state.message}</li>
            </ul>
            <br/>
            <b>Antal klick: </b> <br/>{this.progressValue}
            </h3>

            <button 
            disabled={this.state.enableButton} 
            onClick={this.togglePopup}>KLAR</button>
        </div> 
        : null }
        
        {/*DIV FÖR PROGRESS-BAR*/}
        <div className="">
        </div>
        
        {/* DET SOM SYNS FÖRST 
        
            <button onClick={this.togglePopup.bind(this)}>
                Nytt mål
            </button>

        </div>

        Se detta som en if-sats:
        // om showPopup == true, gör det som syns: 
        // Annars, gör ingenting (null)
        {this.state.showPopup ? 
          <Popup
            closePopup={this.togglePopup.bind(this)} 
          />
          : null
        }

        {<ProgressBar/>}
        
        */}

      </div>
    );
  }
  
}

 class GoalList extends React.Component {
      
    render() {
        return (
          <div>
            <ul className="list-group text-center">
              {
            Object.keys(this.props.goals).map(function(key) {
                  return <li className="list-group-item list-group-item-info">{this.props.goals[key]}</li>
                }.bind(this))
              }
            </ul>
           </div>
         );
       }
}

class AddGoalForm extends React.Component {
      createGoal(e) {
        e.preventDefault();
        //get the fruit object name from the form
        var goal = this.refs.goalName.value;
        //if we have a value
        //call the addFruit method of the App component
        //to change the state of the fruit list by adding an new item
        if(typeof goal === 'string' && goal.length > 0) {
          this.props.addGoal(goal);
          //reset the form
          this.refs.goalForm.reset();
        }
       }
    
       render() {
        return(
          <form ref="goalForm" onSubmit={this.createGoal}>
          <div>
              <input type="text" id="goalItem" placeholder="Här kan du skriva ditt mål" ref="goalName" />
          </div>
          <button type="submit" className="btn btn-primary">Add Goal</button>
    
         </form>
        )
    }
}

export default ProfilePage;