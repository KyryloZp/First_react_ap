import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";




const Navbar = (props) => {
    /*
    let friends = props.state.navbar.map(style =>
        <li>
            <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" alt=""
                 className={s.avatar}/>
            <span className={s.name}>{style.accountName}</span>
        </li>
    );*/

    return (<nav className={s.content}>
            <ul>
                <li className={s.item}><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
                <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
            </ul>
            <div className="friendsList">
                <ul className={s.friends}>
                    {/*{friends}*/}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
