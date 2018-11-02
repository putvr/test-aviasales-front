import React, {Component} from 'react';
//import PropTypes from 'prop-types';

import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';

class TicketsFinder extends Component {
    state = {
        ticketsLoading: false,
        tickets: [],
        showError: false,
        transfersList: [{id: 0, name: 'Все', selected: true, count: ''},
            {id: 1, name: 'Без пересадок', selected: false, count: 0},
            {id: 2, name: '1 пересадка', selected: false, count: 1},
            {id: 3, name: '2 пересадки', selected: false, count: 2},
            {id: 4, name: '3 пересадки', selected: false, count: 3}],
        currencyList: [
            {name: 'RUB', code: '₽', active: true, value: 1},
            {name: 'USD', code: '$', active: false, value: 70},
            {name: 'EUR', code: '€', active: false, value: 80}
        ]
    };

    transferSelectedHandler = (id) => {
        let updatedList = [...this.state.transfersList];
        let ticketList = [...this.state.tickets];

        if (id === 0 && !updatedList[0].selected) {
            updatedList.map((value) => {
                return value.selected = false
            });
            updatedList[0].selected = true;
        }
        else {
            updatedList[0].selected = false;
            updatedList[id].selected = !updatedList[id].selected;
        }

        ticketList.map((value) => {
            let visible = false;

            updatedList.forEach((f) => {
                if (f.selected && value.stops === f.count) {
                    visible = true;
                }
            });

            if (id === 0) {
                visible = true;
            }

            return value.visible = visible;
        });

        this.setState({
            transfersList: updatedList,
            tickets: ticketList
        })
    };

    currencySelectedHandler = (index) => {
        let updateList = [...this.state.currencyList];
        let ticketList = [...this.state.tickets];

        updateList.map((value) => {
            return value.active = false;
        });

        updateList[index].active = true;

        ticketList.map((value) => {
            const active_currency = updateList
                .find((v) => {
                    return v.active;
                });
            return value.price_currency = `${(value.price / active_currency.value).toFixed(2)} ${active_currency.code}`;
        });

        this.setState({
            currencyList: updateList,
            tickets: ticketList
        });
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

    getTicketsData(){
        this.setState({ ticketsLoading: true});

        let request = new XMLHttpRequest();
        request.overrideMimeType("application/json");
        request.open('GET', 'http://localhost:3001/tickets.json', true);
        request.onload = () => {

            if (request.status !== 200) {
                this.setState({showError: true});
                return
            }

            let data = JSON.parse(request.response);

            data = data.tickets.sort((a, b) => a.price - b.price);

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
                        value.arrival_date_day = this.getDayOfWeek(value.arrival_date),
                        value.visible = true,
                        value.price_currency = `${value.price } ₽`
                )
            });

            this.setState({
                tickets: data,
                ticketsLoading: false,
            });
        };
        request.onerror = () => {
            this.setState({showError: true});
        };
        request.send(null);

    }

    componentWillMount() {
        this.getTicketsData();
    }

    render() {
        return (
            <div className="row">
                <Sidebar
                    transfersList={this.state.transfersList}
                    currencyList={this.state.currencyList}
                    transferSelectedHandler={this.transferSelectedHandler}
                    currencySelectedHandler={this.currencySelectedHandler}
                />
                <Content
                    tickets={this.state.tickets}
                    ticketsLoading={this.state.ticketsLoading}
                    showError={this.state.showError}
                />
            </div>
        );
    }
}

//TicketsFinder.propTypes = {};

export default TicketsFinder;