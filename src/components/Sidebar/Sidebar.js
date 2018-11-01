import React, {Component} from 'react';

import './Sidebar.css';

import CurrencyFilter from './CurrencyFilter/CurrencyFilter';
import TransferFilter from './TransferFilter/TransferFilter';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transfersList: [{id: 0, name: 'Все', selected: false},
                {id: 1, name: 'Без пересадок', selected: false},
                {id: 2, name: '1 пересадка', selected: false},
                {id: 3, name: '2 пересадки', selected: false},
                {id: 4, name: '3 пересадки', selected: false}]
        };
    }

    transferSelectedHandler = (id) => {
        let updatedList = [...this.state.transfersList];

        updatedList[id].selected = !updatedList[id].selected;

        if (id === 0) {
            updatedList.map((value) => {
                return value.selected = false
            });
            updatedList[0].selected = true;
        }
        else {
            updatedList[0].selected = false;
        }

        console.log(updatedList);

        this.setState({
            transfersList: updatedList
        })
    };

    render() {

        return (
            <div className="col-md-3 ">
                <div className="container rounded border-white Sidebar">
                    <div className="raw no-gutters pt-3">
                        <div className="col">
                            <span>ВАЛЮТА</span>
                        </div>
                        <div className="col pb-2"></div>
                        <div className="col">
                            <CurrencyFilter

                            />
                        </div>
                    </div>
                    <div className="raw pt-3"></div>
                    <div className="raw no-gutters">
                        <div className="col">
                            <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                        </div>
                        <div className="col">
                            <TransferFilter
                                tickets={this.state.transfersList}
                                transferSelectedHandler={this.transferSelectedHandler}
                            />
                        </div>
                    </div>
                    <div className="raw mb-3 pb-3"></div>
                </div>
            </div>
        );
    }
}

export default Sidebar;