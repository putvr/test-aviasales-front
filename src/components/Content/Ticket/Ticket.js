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
                <div className="TicketDeparture FontTime">{props.ticket.departure_time}</div>
                <div className="TicketStops">
                    {props.ticket.stops_count} <br/>
                    {props.ticket.stops_attr}
                </div>
                <div className="TicketArrival FontTime">{props.ticket.arrival_time}</div>
            </div>

            <div className="TicketLine-2 FontCity">
                <div className="TicketDeparture">
                    {props.ticket.origin}, {props.ticket.origin_name} <br/>
                    {props.ticket.departure_date}, {props.ticket.departure_date_day}
                </div>
                <div className="TicketArrival ">
                    {props.ticket.destination}, {props.ticket.destination_name} <br/>
                    {props.ticket.arrival_date}, {props.ticket.arrival_date_day}
                </div>
            </div>
        </div>
    </div>
);

export default Ticket;