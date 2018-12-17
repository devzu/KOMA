import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './main.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const HelloWorldText = () => ( 
 <div className="containWithStuff">
        <div className=" row" id="root">
</div>
<App/>


</div>

);

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        };
    }
    
    render() {
        return (
      
        <div className="Blue">
            
            <div>
            
            <h1 className="center_align"><b>Vad vill du göra?</b></h1>
            
                <div className="container">
                    
                    {/* IKONERNA */}
                    <div className="row">
                        <div className="col-sm center_align">
                            <span className="glyphicon glyphicon-stats dissapear"></span>
                        </div>
                        <div className="col-sm center_align">
                            <span className="glyphicon glyphicon-calendar dissapear"></span>
                        </div>
                        <div className="col-sm center_align">  
                            <span className="glyphicon glyphicon-education dissapear"></span>
                        </div>
                    </div>   
                    
                    {/* BESKRIVNINGAR */}
                    <div className="row">
                        <div className="col-sm center_align">
                            <em>Tracka mina mål</em>
                            <br/>
                            <button className="mybutton">
                                INFO
                            </button> 
                        </div>
                        <div className="col-sm center_align">
                            <em>Kolla min kalender</em>
                            <br/>
                            <button className="mybutton">
                                INFO
                            </button>
                        </div>
                        <div className="col-sm center_align">  
                            <em>Bli studiemotiverad</em>
                            <br/>
                            <button className="mybutton">
                                INFO
                            </button>
                        </div>
                    </div>
        
            
            
                </div>
            
            </div>
        </div>
        
        );
    }
}
/*
class App extends Component {
        constructor() {
            super();
            this.handleClick1 = this.handleClick1.bind(this);
            this.state = {
                    
                viewContent1: false,
                viewContent2: false,
                viewContent3: false,
                viewContent4: false
                // 0 could be your default view
            }
        }
    
        handleClick1 = () => {
            this.setState({ viewContent1: true, viewContent2: false, viewContent3: false, viewContent4: false })
        }

        handleClick2 = (button) => {
                this.setState({viewContent1: false, viewContent2: true, viewContent3: false, viewContent4: false })
            }

        handleClick3 = (button) => {
                this.setState({viewContent1: false, viewContent2: false, viewContent3: true, viewContent4: false })
            }

        handleClick4 = (button) => {
                this.setState({ viewContent1: false, viewContent2: false, viewContent3: false, viewContent4: true  })
            }
        
    
        render() {
            const click1= this.state.viewContent1;
            const click2= this.state.viewContent2;
            const click3= this.state.viewContent3;
            const click4= this.state.viewContent4;
            if(click1) return  (<div className="container" id="">
            <div className="col-xl-11 self-align-center"><div className="row">
            <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                    <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                    <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                    <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
            <br/>
            </div></div></div>)
                else if (click2) 
                return ( 
                        <div className="container" id="">
        <div className="col-xl-11 self-align-center"><div className="row">
        <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
        <br/>
        </div></div></div>
                )
                  else if (click3) return (<div className="container" id="">
                  <div className="col-xl-11 self-align-center"><div className="row">
                  <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                          <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                          <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                          <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
                  <br/>
                  </div></div></div>)
                  else if (click4) return (
                        <div className="container" id="">
                        <div className="col-xl-11 self-align-center"><div className="row">
                        <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                                <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                                <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                                <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
                        <br/>
                        </div></div></div>
                  )

        else return (<div className="container boxContent" id="">
        <div className="col-xl-11 self-align-center"><div className="row">
        <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
        <br/>
        </div></div>
        <div className="container"><div className="row"><div className="col-xl-11 self-align-center Blue">
        
        <div className="videosContainer">
        <div className="VideoBox row">  <div className="col">
        <iframe title="fuckIt" className="WhatEverBro" width="426" height="240" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div className="VideoDescText col"><h3>Lorem Ipsum</h3><p>Väldigt informativ video om Lorem Ipsum</p></div> </div>
    </div> <hr/>

    <div className="videosContainer">
        <div className="VideoBox row">  <div className="col">
        <iframe title="fuckIt" className="WhatEverBro" width="426" height="240" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div className="VideoDescText col"><h3>Lorem Ipsum</h3><p>Väldigt informativ video om Lorem Ipsum</p></div> </div>
    </div> <hr/>

    <div className="videosContainer">
        <div className="VideoBox row">  <div className="col">
        <iframe title="fuckIt" className="WhatEverBro" width="426" height="240" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div className="VideoDescText col"><h3>Lorem Ipsum</h3><p>Väldigt informativ video om Lorem Ipsum</p></div> </div>
    </div> <hr/>

    
    
    </div></div></div></div>
        )
        }

        
}
*/

ReactDOM.render(<App />, document.getElementById('root'));

export default HelloWorldText;