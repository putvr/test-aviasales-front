import React, {Component} from 'react';

//import PropTypes from 'prop-types';

import './TransferFilter.css';

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
        this.transferSelectedHandler = this.transferSelectedHandler.bind(this)
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
            //transfersList[id].selected: !transfersList[id].selected
            transfersList: updatedList
        })
    }

    render() {
        return (
            <div className="TransferFilter">
                <ul>
                    {this.state.transfersList.map((value) => {
                        return (
                            <li key={value.id} onClick={() => this.transferSelectedHandler(value.id)}>
                                <input
                                    type="checkbox"
                                    defaultChecked={value.selected}
                                />
                                {value.name}
                            </li>);
                    })
                    }
                </ul>
            </div>
        );
    }
}

//TransferFilter.propTypes = {};

export default TransferFilter;