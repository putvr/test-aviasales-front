import React, {Component} from 'react';

import Ticket from './Ticket/Ticket';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: []
        }
    }

    componentWillMount() {
        let data = [{
            "origin": "VVO",
            "origin_name": "Владивосток",
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.18",
            "departure_time": "16:20",
            "arrival_date": "12.05.18",
            "arrival_time": "22:10",
            "carrier": "TK",
            "stops": 3,
            "price": 12400
        }, {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.18",
            "departure_time": "17:20",
            "arrival_date": "12.05.18",
            "arrival_time": "23:50",
            "carrier": "S7",
            "stops": 1,
            "price": 13100
        }];
        this.setState({
            'tickets': data
        });
    }


    render() {
        return (
            <div className="Content">
                {this.state.tickets.map((value, index) => {
                        return <Ticket ticket={value} key={index}/>
                    }
                )}
            </div>
        );
    }
}

export default Content;