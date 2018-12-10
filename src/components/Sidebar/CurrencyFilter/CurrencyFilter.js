import React from 'react';

import './CurrencyFilter.css';

const CurrencyFilter = (props) => (
    <div className="btn-group col-sm pl-0" role="group">
        {props.currencyList.map((value, index) => {
            return (
                <button
                    className={`btn btn-secondary CurrencyFilter${ value.active ? ' activeButton' : ''}`}
                    type="button"
                    onClick={() => props.currencySelectedHandler(index)}
                    key={index}
                >
                    {value.name}
                </button>
            );
        })
        }
    </div>
);

export default CurrencyFilter;