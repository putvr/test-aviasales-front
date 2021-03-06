import React from 'react';

import './Sidebar.css';

import CurrencyFilter from './CurrencyFilter/CurrencyFilter';
import TransferFilter from './TransferFilter/TransferFilter';

const Sidebar = (props) => (
    <div className="col-lg-3 mb-3">
        <div className="container rounded border-white Sidebar">
            <div className="raw no-gutters pt-3">
                <div className="col pb-2">
                    <span>ВАЛЮТА</span>
                </div>
                <div className="col">
                    <CurrencyFilter
                        currencyList={props.currencyList}
                        currencySelectedHandler={props.currencySelectedHandler}
                    />
                </div>
            </div>
            <div className="raw no-gutters pt-3 pb-3">
                <div className="col">
                    <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                </div>
                <div className="col">
                    <TransferFilter
                        transfersList={props.transfersList}
                        transferSelectedHandler={props.transferSelectedHandler}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Sidebar;