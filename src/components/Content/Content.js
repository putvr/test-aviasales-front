import React from 'react';

import Ticket from './Ticket/Ticket';
import Spinner from '../Spinner/Spinner';

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
            <div className="col-md-8 text-center text">
                <Spinner/>
            </div>

        );
    }

    return (
    <div className="col-lg-9">
        {props.tickets.map((value, index) => {
                return value.visible ? <Ticket ticket={value} key={index}/> : '';
            }
        )}
    </div>
    );
};

export default Content;