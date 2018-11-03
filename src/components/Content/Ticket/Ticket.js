import React from 'react';

import './Ticket.css';
import logo from './TA.svg';
import arrow from './arrow.svg';

const Ticket = (props) => (

    <div className="container rounded Ticket mb-3">
        <div className="row">
            <div className="col-sm-4 TicketInfo pb-3">
                <div className="container pt-3">
                    <div className="row">
                        <div className="col-sm text-center">
                            <img src={logo} className=" pb-3" alt=""/>
                        </div>
                        <div className="col-sm text-center">
                            <button className="btn">Купить<br/>за {props.ticket.price_currency}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-8">
                <div className="container pb-3">
                    <div className="row">
                        <div className="col-md-4 col-ld-5 pt-3">
                            <div className="col-sm FontLeft FontTime">{props.ticket.departure_time}</div>
                            <div className="col-sm FontLeft FontCity">
                                {props.ticket.origin}, {props.ticket.origin_name} <br/>
                                {props.ticket.departure_date}, {props.ticket.departure_date_day}
                            </div>
                        </div>
                        <div className="col-md-4 col-ld-2 pt-3">
                            <div className="col-sm text-center TicketStops">
                                <div>{props.ticket.stops_count ? props.ticket.stops_count : "\u00a0"}</div>
                                <img className="img-fluid" src={arrow} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-4 col-ld-5 pt-3">
                            <div className="col-sm FontLeft TicketArrival FontTime">{props.ticket.arrival_time}</div>
                            <div className="col-sm FontLeft FontCity">
                                {props.ticket.destination}, {props.ticket.destination_name} <br/>
                                {props.ticket.arrival_date}, {props.ticket.arrival_date_day}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
);

export default Ticket;