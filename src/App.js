import React, {Component} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>

                    <Sidebar/>
                    <Content />

            </div>
        );
    }
}

export default App;
