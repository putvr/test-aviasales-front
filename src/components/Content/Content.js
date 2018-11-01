import React from 'react';

import Ticket from './Ticket/Ticket';

const Content = (props) => (
    <div className="col-md-8">
        {props.tickets.map((value, index) => {
                return <Ticket ticket={value} key={index} />
            }
        )}
    </div>
);
export default Content;