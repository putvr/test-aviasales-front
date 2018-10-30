import React, {Component} from 'react';

import CurrencyFilter from './CurrencyFilter/CurrencyFilter';

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <span>ВАЛЮТА</span>
                <CurrencyFilter/>
                <span>TRANSFER FILTER</span>

            </div>
        );
    }
}

export default Sidebar;