import React from 'react'
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink to={`/dialogs/${props.accountId}`} className={s.item}>
            <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" alt=""
                 className={s.avatar}/>
            <span className={s.name}>{props.name}</span>
        </NavLink>
    );
}

export default Dialog;