import React from 'react';

import Header from '../Header/Header';

const Layout = (props) => (
    <div className="container App">
        <div className="row Header">
            <Header/>
        </div>
        <main>{props.children}</main>
    </div>
);

export default Layout;