import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'babel-polyfill';
import './App.css';

import Layout from './components/Layout/Layout';
import TicketsFinder from './containers/TicketsFinder/TicketsFinder';

class App extends Component {
    render() {
        return (
            <Layout>
                <TicketsFinder/>
            </Layout>
        );
    }
}

export default App;
