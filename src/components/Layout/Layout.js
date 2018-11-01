import React from 'react';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

const Layout = () => (
    <div className="container App">
        <div className="row Header">
            <Header/>
        </div>

        <div className="row">
            <Sidebar/>
            <Content/>
        </div>
    </div>
);

export default Layout;