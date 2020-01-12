import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={s.content}>
            <div className={s.aut_block}>
                {props.isAuth
                    ? <div>{props.login}<button onClick={props.authLogOut}>Log Out</button></div>
                    : <NavLink to='/login' className={s.auth_login}>Log in</NavLink> }
            </div>
            <img
                src="https://st4.depositphotos.com/18657574/21182/v/1600/depositphotos_211824316-stock-illustration-drop-vector-icon-isolated-on.jpg"
                alt=""/>
        </header>
    );
};

export default Header;
