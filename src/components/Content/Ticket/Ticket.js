import React from 'react';

import './Ticket.css';
import logo from './TA.svg';
import arrow from './arrow.svg';

const Ticket = (props) => (

    <div className="container rounded Ticket">

        <div className="row">
            <div className="col-4 TicketInfo">
                <div className="container ">
                    <div className="row pt-3"></div>
                    <div className="row ">
                        <div className="col text-center">
                            <img src={logo} className="img-fluid" alt=""/>
                            <button className="btn">Купить<br/>за {props.ticket.price} ₽</button>
                        </div>
                    </div>
                </div>
                <div className="row pb-3"></div>
            </div>

            <div className="col-8">
                <div className="container ">
                    <div className="row pt-3"></div>
                    <div className="row">
                        <div className="col-4 text-left FontTime">{props.ticket.departure_time}</div>
                        <div className="col-4 text-center TicketStops">
                            <div>{props.ticket.stops_count}</div>
                            <img className="img-fluid" src={arrow} alt="" />
                        </div>
                        <div className="col-4 text-right TicketArrival FontTime">{props.ticket.arrival_time}</div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-5 text-left FontCity">
                            {props.ticket.origin}, {props.ticket.origin_name} <br/>
                            {props.ticket.departure_date}, {props.ticket.departure_date_day}
                        </div>
                        <div className="col-5 offset-2 text-right FontCity  ">
                            {props.ticket.destination}, {props.ticket.destination_name} <br/>
                            {props.ticket.arrival_date}, {props.ticket.arrival_date_day}
                        </div>
                    </div>
                    <div className="row pb-3"></div>
                </div>
            </div>
        </div>

        <div className="row mb-3"></div>
    </div>
);

export default Ticket;