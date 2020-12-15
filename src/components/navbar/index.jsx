import React from 'react';

import './navbar.scss';
import disk from '../../assets/img/disk.png';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return (
        <div className="navbar">
            <div className="navbar__left">
                <img src={disk} alt="disk"/>
                <div className="navbar__header">lwakis Cloud</div>
            </div>
            <div className="navbar__right">
                {!isAuth && <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div> }
                {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div> }
                {isAuth && <div className="navbar__login" onClick={() => dispatch(logout())}>Выход</div> }

            </div>
        </div>
    );
};

export default Navbar;