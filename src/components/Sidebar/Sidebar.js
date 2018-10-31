import React, {Component} from 'react';

import './Sidebar.css';

import CurrencyFilter from './CurrencyFilter/CurrencyFilter';
import TransferFilter from './TransferFilter/TransferFilter';

class Sidebar extends Component {
    render() {
        return (
            <div className="col-md-3 ">
                <div className="card border-white Sidebar">
                    <div className="card-body ">
                        <span>ВАЛЮТА</span>
                        <CurrencyFilter/>
                        <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                        <TransferFilter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;