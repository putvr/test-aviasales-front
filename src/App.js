import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

class App extends Component {
    render() {
        return (
            <div className="container App">
                <div className="row Header">
                    <Header/>
                </div>

                <div className="row">
                    <Sidebar/>
                    <Content/></div>
            </div>
        );
    }
}

export default App;
