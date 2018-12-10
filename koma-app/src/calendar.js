import React, { Component } from 'react';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap';
import TipsPage from './tips';

const CalendarPage = () => ( 
 <div className="">
 <Container><Row><Col s="6">fuck</Col><Col s="4">THIS</Col></Row></Container>
</div>

);

class Kalender extends React.Component{
        render(){
                return(
                        <div className="NOPE">lol</div>
                )
        }
}


class Deadlines extends React.Component{
        render(){
                return(
                        <div className="NOPE">
                                <div className="ThisWeek"><h3>Denna vecka:</h3></div>
                        </div>
                )
        }
}
    
    
export default CalendarPage;