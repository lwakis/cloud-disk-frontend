import React from 'react';

import './navbar.scss';
import disk from '../../assets/img/disk.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <img src={disk} alt="disk"/>
                <div className="navbar__header">lwakis Cloud</div>
            </div>
            <div className="navbar__right">
                <div className="navbar__login">Войти</div>
                <div className="navbar__registration">Регистрация</div>
            </div>
        </div>
    );
};

export default Navbar;