import React, { Component } from 'react';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';

class CalendarPage extends React.Component
{
    render() {
        const date = new Date();
        const today = date.getDate();
        
 
        return (
            <div>
                <Moment>{today}</Moment>
            </div>
        );
    }
}


/*const CalendarPage = () => ( 
 <div className="content-box">
    <h1 className="page-title">Kalender</h1>
    <div className="mittenBox">
    
    </div>
   
</div>

);*/

export default CalendarPage;