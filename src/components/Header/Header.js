import React from 'react';
import logo from './logo.svg';

const Header = () => {
    return (
        <header className="col text-center">
            <div>
                <img src={logo} alt=""/>
            </div>
        </header>
    );
};

export default Header;