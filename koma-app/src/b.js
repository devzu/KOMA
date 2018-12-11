import React, { Component } from 'react';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

const HelloWorldText = () => ( 
 <div className="containWithStuff">jhbjhbj
        <div className="" id="root">
fuck it all magna melius eos eu. Et mea lobortis suscipiantur, ignota consequat conceptam sit ei. Vidit omnes his et. Cu ferri euismod corpora cum. </div>

<App/>


</div>

);

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
            if(click1) return  (
                <div id=""> 
                        
                <button className='button button1' onClick={this.handleClick1}>VIDEO</button>
                <button className='button button2' onClick={this.handleClick2}> HEMSIDA</button>
                <button className='button button3' onClick={this.handleClick3}> BÖCKER</button>
                <button className='button button3' onClick={this.handleClick4}> APPAR</button>
                AAJNSJHSNJHDBDJH
                </div>)
                else if (click2) return ( 
                        <div id=""> 
                        
                        <button className='button button1' onClick={this.handleClick1}>VIDEO</button>
                <button className='button button2' onClick={this.handleClick2}> HEMSIDA</button>
                <button className='button button3' onClick={this.handleClick3}> BÖCKER</button>
                <button className='button button3' onClick={this.handleClick4}> APPAR</button>
                AAJNSJHSNJHDBDJH
                </div>)
                  else if (click3) return ( 
                        <div id=""> 
                        
                        <button className='button button1' onClick={this.handleClick1}>VIDEO</button>
                <button className='button button2' onClick={this.handleClick2}> HEMSIDA</button>
                <button className='button button3' onClick={this.handleClick3}> BÖCKER</button>
                <button className='button button3' onClick={this.handleClick4}> APPAR</button>
                blubb
                </div>)
                  else if (click4) return ( 
                        <div id=""> 
                        
                        <button className='button button1' onClick={this.handleClick1}>VIDEO</button>
                <button className='button button2' onClick={this.handleClick2}> HEMSIDA</button>
                <button className='button button3' onClick={this.handleClick3}> BÖCKER</button>
                <button className='button button3' onClick={this.handleClick4}> APPAR</button>
                
                </div>)

        else return (<div id="">
        <button className='button button1' onClick={this.handleClick1}>VIDEO</button>
                <button className='button button2' onClick={this.handleClick2}> HEMSIDA</button>
                <button className='button button3' onClick={this.handleClick3}> BÖCKER</button>
                <button className='button button3' onClick={this.handleClick4}> APPAR</button>
        <br/>okej försök trycka nu då
        </div>)
        }

        
}
ReactDOM.render(<App />, document.getElementById('root'));

export default HelloWorldText;