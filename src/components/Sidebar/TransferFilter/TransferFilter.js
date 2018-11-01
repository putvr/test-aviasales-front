import React from 'react';

//import PropTypes from 'prop-types';
import './TransferFilter.css';

import inactive from './checklistDisabled.svg';
import active from './checklistEnabled.svg';

const TransferFilter = (props) => (
    <ul className="list-group list-group-flush TransferFilter">
        {props.tickets.map((value) => {
            return (
                <li
                    className="list-group-item pl-0"
                    key={value.id}
                    onClick={() => props.transferSelectedHandler(value.id)}>
                    <img src={`${value.selected ? active : inactive}`} alt="" className="img-fluid"/>
                    <span>{value.name}</span>
                </li>);
        })}
    </ul>
);

//TransferFilter.propTypes = {};

export default TransferFilter;