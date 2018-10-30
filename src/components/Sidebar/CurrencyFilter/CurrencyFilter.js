import React, {Component} from 'react';
//import PropTypes from 'prop-types';

import './CurrencyFilter.css';

class CurrencyFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'currencyList': ['RUB', 'USB', 'EUR'],
            'activeCurrency': 'RUB'
        };
    }

    currencySelectedHandler(value) {
         this.setState({
             'activeCurrency': value
         });
    }

    render() {

        return (
            <div className="CurrencyFilter">
                {this.state.currencyList.map((value, index) => {

                    let cls = '';
                    if (index === 0) {
                        cls = 'first';
                    }
                    if (index === this.state.currencyList.length - 1) {
                        cls = 'last';
                    }
                    if (value === this.state.activeCurrency) {
                        cls += ' active';
                    }

                    return (
                        <div className={cls}
                             onClick={() => this.currencySelectedHandler(value)}
                             key={index}
                        >{value}</div>
                    );
                })
                }
            </div>
        );
    };

}


//CurrencyFilter.propTypes = {};

export default CurrencyFilter;