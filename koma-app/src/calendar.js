import React, { Component } from 'react';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap';
import Calendar from 'react-calendar';
import TipsPage from './tips';

const CalendarPage = () => ( 
 <div className="">
 <Container><Row><Col xl="3"><div class="Blue"><Deadlines/></div></Col><Col xl="6"><div class="Blue"><Kalender/></div></Col></Row></Container>
</div>

);

class Kalender extends React.Component{
        render(){
                return(
                        <div className="NOPE"><h3>HELA JÄVLA MÅNAN'</h3>
                        <Calendar/></div>
                )
        }
}


class Deadlines extends React.Component{
        render(){
                return(
                        <div className="NOPE">
                                <div className="ThisWeek"><h3>Denna vecka:</h3>
                                <hr></hr>
                                <p><span className="glyphicon glyphicon-calendar liten"></span> - <strike>(11/12) En de adline</strike></p>
                                <p><span className="glyphicon glyphicon-calendar liten reddo"></span> - (18/12)En deadline till</p> 
                                <br></br><br></br>
                                <h3>Denna månaden:</h3>
                                <hr></hr>
                                <p><span className="glyphicon glyphicon-calendar liten"></span> - Massa inlämning</p>
                                <p><span className="glyphicon glyphicon-calendar liten"></span> - So tenta</p>
                                <p><span className="glyphicon glyphicon-calendar liten"></span> - Much wow</p><br></br>
                             

                                </div>
                        </div>
                )
        }
}
    
    
export default CalendarPage;