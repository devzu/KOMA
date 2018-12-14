import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css';

/******************************
*  Här skickas innehållet på  * 
*  sidan till App.js          *
******************************/
const ProfilePage = () => ( 
<div className="containWithStuff">
    <div className="Blue col-10">
    
    <ProfilePageContent/>
    
    </div> 
   
</div>

);

/******************************
*   INNEHÅLLET PÅ SIDAN!!!    *
******************************/
class ProfilePageContent extends React.Component {
   
    /***********************
    *  CONSTRUCTOR & STATE *
    ***********************/
    
    constructor(props) {
        super(props);
        
        this.state = {
            progressMax: 0,
            progressCount: 0,
            
            showInstructions: false,
            showCreate: false, 
            showProgress: false,
            
            doneButton: true,
            
            GRATTIS: '',
            goalName: 'VÄLKOMMEN',
            
            value: [],
            textvalue : "",
            
            goals: {
                'goal-1' : 'Uppg. 3-9',
                'goal-2' : 'Gör formelsamling',
                'goal-3' : 'Uppg. 16a - 18',
                'goal-4' : 'Övningstenta',
                'goal-5' : 'RIKTIG TENTA'
            }
        };
        
        this.closePopup = this.closePopup.bind(this);
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        
    }
    

    /***********************
    *      FUNKTIONER      *
    ***********************/
    
    // Visa/dölj informationslådan (showInstructions)
    
    // Toggla popup/progress (showCreate & showProgress)
    openPopup = () => {
        this.setState({
            showPopup: true,
            showInstructions: false
        });
    }
    
    closePopup = () => {
        this.setState({
            showPopup: false
        });
    }

    toggleInfo = () => {
        this.setState({
            showInstructions: !this.state.showInstructions
        });
    }
    
    // Spara antal delmål (progressMax, doneButton)
    
    createGoal = (e) => {
        e.preventDefault();
        this.setState({
            goalName: 'Matematik'
        });
        this.closePopup();
    }
    
    addGoal = () => {
        this.setState({
            doneButton: false
        });
    }

    handleChange(e) {
        
        this.setState({
          textvalue:e.target.value
        })
    }

    handleAddTodoItem() {
        
        // Lägger till 'textvalue' i arrayen 'value'
        this.state.value.push(this.state.textvalue)

        //Uppdaterar state i funktionen (annars funkade tydligen ingenting)
        this.setState(this.state);
        this.setState({
            doneButton: false,
            progressMax: this.state.progressMax + 1
            });

    }


    // Räkna progress (progressCount)
    incrementCounter = () => {
        this.setState({
            progressCount: this.state.progressCount + 1
        });
        
         /*
        if (this.state.progressCount == this.state.progressMax - 1) {
            this.setState({
                GRATTIS: "GRATTIS!"
            });
        }*/
        
    }
    
    // Displaya antal delmål

    /***********************
    *       RENDER()       *
    ***********************/
    render() {
        
       return(
<div className="row">

    <div className="col-8">

        {/* KNAPPAR! */}
        <button className="mybutton" onClick={this.toggleInfo}>
        INFO
        </button> 

        <button onClick={this.openPopup} className="mybutton">
        <b>+</b>
        </button>

        {/* INFOBOX */}
        { this.state.showInstructions ?
        <div id="info_box">
        <b>Information:</b> <br/>
        Den här textlådan ska visas om det är så att användaren inte har gjort ngt mål förut, för att instruera hur man gör ett mål. I slutet ska den instruera till att man kan trycka på plusknappen för att gå vidare.
        Rent krasst för dig så behöver du ha en bool som börjar som falsk och sen bara blir sann för resten av tiden! Puss å kram, du klarar detta...
    </div>

        : null
        }


    {/* POP UP */}
    { this.state.showPopup ?
    <div className="pop_up" >

    <h2>Namn på mål:</h2>
    <input type="text"></input>

    <br/>

    {/* DELMÅL SOM FUNGERAR!!! */}

    <h2>Delmål:</h2>

    <input size="50" type="text" placeholder="Skriv ditt delmål här" className="text" onChange={this.handleChange} />

    <button className="mybutton" onClick={this.handleAddTodoItem}>Lägg till</button>

    <ol>
    {this.state.value.map((v) => {
    return <li>
    <h4 className="font">
      {v}
    </h4>
    </li>

    })}
    </ol>

    {/* DELMÅL SOM FUNGERAR!!! */}

    <br/>

    <button className="mybutton" disabled={this.state.doneButton} onClick={this.closePopup}>Klar</button>

</div>

: 

<div className="row">
    <div className=".col-6 .col-md-4">

        <div>
        <progress className="progress progress_vertical" value={this.state.progressCount} max={this.state.progressMax}>
        </progress>
        </div>

    </div>
    <div className=".col-12 .col-md-8">
        <ul>
            {this.state.value.map((v) => {
            return <li>
              <input type="checkbox" onClick={this.incrementCounter}/>
              {v}
            </li>

            })}
        </ul>
    </div>

</div>
}

</div>


</div>
       );
   }
   
}

export default ProfilePage;