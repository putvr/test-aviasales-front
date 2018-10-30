import React, {Component} from 'react';

import CurrencyFilter from './CurrencyFilter/CurrencyFilter';
import TransferFilter from './TransferFilter/TransferFilter';

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <span>ВАЛЮТА</span>
                <CurrencyFilter/>
                <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                <TransferFilter/>
            </div>
        );
    }
}

export default Sidebar;