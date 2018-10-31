import React, {Component} from 'react';

//import PropTypes from 'prop-types';
import './TransferFilter.css';

import inactive from './checklistDisabled.svg';
import active from './checklistEnabled.svg';

class TransferFilter extends Component {
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

    transferSelectedHandler(id) {
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
    }

    render() {
        return (
                <ul className="list-group list-group-flush TransferFilter">
                    {this.state.transfersList.map((value) => {
                        return (
                            <li
                                className="list-group-item pl-0"
                                key={value.id}
                                onClick={() => this.transferSelectedHandler(value.id)}>
                                <img src={`${value.selected? active : inactive}`} alt="" className="img-fluid"/>
                                <span>{value.name}</span>
                            </li>);
                    })}
                </ul>
        );
    }
}

//TransferFilter.propTypes = {};

export default TransferFilter;