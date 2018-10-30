import React from 'react';

import './Ticket.css';
import logo from './TA.svg';

const Ticket = (props) => (

    <div className="Ticket">


        <div className="TicketInfo">
            <img src={logo} alt=""/>
            <button>Купить<br/>за {props.ticket.price} ₽</button>
        </div>

        <div className="TicketSchedule">

            <div className="TicketLine-1">
                <div className="TicketTime">
                    {props.ticket.departure_time}<br/>

                </div>
                <div className="TicketStops">{props.ticket.stops}</div>
                <div className="TicketTime">{props.ticket.arrival_time}</div>
            </div>

            <div className="TicketLine-2">
                <div>{props.ticket.origin}, {props.ticket.origin_name}</div>
                <div>{props.ticket.destination}, {props.ticket.destination_name}</div>
            </div>

            <div className="TicketLine-2">
                <div>{props.ticket.departure_date}, {}</div>
                <div>{props.ticket.arrival_date}, {}</div>
            </div>
        </div>
    </div>
);

export default Ticket;