import React from 'react';

import Ticket from './Ticket/Ticket';

const Content = (props) => {
    if (props.showError){
        return(
            <div className="alert alert-danger col-md-8" role="alert">
                Network error!  <a href="/" className="alert-link">Reload the page!</a>
            </div>
        );
    }

    if (props.ticketsLoading){
        return(
            <div className="progress col-md-8">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
            </div>
        );
    }

    return (
    <div className="col-md-8">
        {props.tickets.map((value, index) => {
                return value.visible ? <Ticket ticket={value} key={index}/> : '';
            }
        )}
    </div>
    );
};

export default Content;