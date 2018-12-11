import React, { Component } from 'react';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const HelloWorldText = () => ( 
 <div className="containWithStuff">jhbjhbj
        <div className="">
fuck it all magna melius eos eu. Et mea lobortis suscipiantur, ignota consequat conceptam sit ei. Vidit omnes his et. Cu ferri euismod corpora cum. </div>

<App/>


</div>

);

class App extends Component {
        constructor() {
            super();
            this.state = {
                viewContent1: false,
                viewContent2: false,
                viewContent3: false,
                viewContent4: false
                // 0 could be your default view
            }
        }
    
        handleClick1 = (button) => {
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
            if(this.state.viewContent1 === true) return  (
                <div > 
                        DU TRYCKTE PÅ KNAPP 1!!!
                <button className='button button1' onClick={() => this.handleClick1}> BUTTON 1</button>
                <button className='button button2' onClick={() => this.handleClick2}> BUTTON 2</button>
                <button className='button button3' onClick={() => this.handleClick3}> BUTTON 3</button>
                <button className='button button3' onClick={() => this.handleClick4}> BUTTON 4</button>
                AAJNSJHSNJHDBDJH
                </div>)
        else return (<div>
        <button className='button button1' onClick={() => this.handleClick1}> BUTTON 1</button>
        {/* <button className='button button2' onClick={() => this.handleClick2}> BUTTON 2</button>
        <button className='button button3' onClick={() => this.handleClick3}> BUTTON 3</button>
        <button className='button button3' onClick={() => this.handleClick4}> BUTTON 4</button> */}
        <br/>okej försök trycka nu då
        </div>)
        }
}

export default HelloWorldText;