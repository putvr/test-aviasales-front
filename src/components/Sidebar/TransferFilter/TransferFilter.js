import React, {Component} from 'react';

//import PropTypes from 'prop-types';

import './TransferFilter.css';

class TransferFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'transfersList':
                ['Все',
                    'Без пересадок',
                    '1 пересадка',
                    '2 пересадки',
                    '3 пересадки'],
            'selected': ['Все',]
        }
    }

    transferSelectedHandler(value) {

        let selected = this.state.selected;

        if (this.state.selected.indexOf(value) >= 0) {
            selected = selected.splice(selected.indexOf(value), 1);
        } else {
            selected.push(value)
        }

        this.setState({
            'selected': selected
        })
    }


    render() {
        return (
            <div className="TransferFilter">
                <ul>
                    {this.state.transfersList.map((value, index) => {

                       let selected = false;
                       if (this.state.selected.indexOf(value) >= 0) {
                            selected = true;
                           console.log(this.state.selected);
                        }

                        return (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    defaultChecked={selected}
                                    onChange={() => this.transferSelectedHandler(value)}
                                />
                                {value}
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