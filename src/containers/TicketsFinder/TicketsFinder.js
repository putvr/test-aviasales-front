import React, {Component} from 'react';
//import PropTypes from 'prop-types';

import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';

class TicketsFinder extends Component {
    state = {
        tickets: []
    };

    getDayOfWeek(string) {

        const days = ['Пн',
            'Вт',
            'Ср',
            'Чт',
            'Пт',
            'Сб',
            'Вс'];

        let date = new Date();

        date.setFullYear(
            '20' + string.split('.')[2],
            string.split('.')[1] - 1,
            string.split('.')[0]);

        return days[date.getDay() - 1];
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
        }, {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.18",
            "departure_time": "12:10",
            "arrival_date": "12.05.18",
            "arrival_time": "18:10",
            "carrier": "SU",
            "stops": 0,
            "price": 15300
        }, {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.18",
            "departure_time": "17:00",
            "arrival_date": "12.05.18",
            "arrival_time": "23:30",
            "carrier": "TK",
            "stops": 2,
            "price": 11000
        }, {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.18",
            "departure_time": "12:10",
            "arrival_date": "12.05.18",
            "arrival_time": "20:15",
            "carrier": "BA",
            "stops": 3,
            "price": 13400
        }, {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.18",
            "departure_time": "9:40",
            "arrival_date": "12.05.18",
            "arrival_time": "19:25",
            "carrier": "SU",
            "stops": 3,
            "price": 12450
        }, {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.18",
            "departure_time": "17:10",
            "arrival_date": "12.05.18",
            "arrival_time": "23:45",
            "carrier": "TK",
            "stops": 1,
            "price": 13600
        }, {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.18",
            "departure_time": "6:10",
            "arrival_date": "12.05.18",
            "arrival_time": "15:25",
            "carrier": "TK",
            "stops": 0,
            "price": 14250
        }, {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.18",
            "departure_time": "16:50",
            "arrival_date": "12.05.18",
            "arrival_time": "23:35",
            "carrier": "SU",
            "stops": 1,
            "price": 16700
        }, {
            "origin": "VVO",
            "origin_name": "Владивосток",
            "destination": "TLV",
            "destination_name": "Тель-Авив",
            "departure_date": "12.05.18",
            "departure_time": "6:10",
            "arrival_date": "12.05.18",
            "arrival_time": "16:15",
            "carrier": "S7",
            "stops": 0,
            "price": 17400
        }];

        data = data.sort( (a,b) =>  a.price - b.price );

        data.map((value) => {

            let stops_count;

            switch (value.stops) {
                case 0:
                    stops_count = '';
                    break;
                case 1:
                    stops_count = '1 пересадка';
                    break;
                default:
                    stops_count = value.stops + ' пересадки';
            }

            return (
                value.stops_count = stops_count,
                    value.departure_date_day = this.getDayOfWeek(value.departure_date),
                    value.arrival_date_day = this.getDayOfWeek(value.arrival_date)
            )
        });

        this.setState({
            'tickets': data
        });
    }

    render() {
        return (
            <div className="row">
                <Sidebar/>
                <Content
                    tickets = {this.state.tickets}
                />
            </div>
        );
    }
}

//TicketsFinder.propTypes = {};

export default TicketsFinder;