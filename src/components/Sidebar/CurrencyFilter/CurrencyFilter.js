import React, {Component} from 'react';
//import PropTypes from 'prop-types';

import './CurrencyFilter.css';

class CurrencyFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'currencyList': [
                {name: 'RUB', active: true}, {name: 'USB', active: false}, { name:'EUR', active: false}
                ]
        };
    }

    currencySelectedHandler(index) {
        let updateList = [...this.state.currencyList];

        updateList.map( (value) => {
            return value.active = false;
        });

        updateList[index].active = true;

        this.setState({
            currencyList: updateList
        });
    }

    render() {
        return (
            <div className="btn-group" role="group">
                {this.state.currencyList.map((value, index) => {
                    return (
                        <button
                            className={`btn btn-secondary CurrencyFilter${ value.active? ' activeButton' : ''}`}
                            type="button"
                            onClick={() => this.currencySelectedHandler(index)}
                            key={index}
                        >{value.name}
                        </button>
                    );
                })
                }
            </div>
        );
    };

}


//CurrencyFilter.propTypes = {};

export default CurrencyFilter;