import style from "../Users.module.css";
import React from "react";
import userPhoto from '../../../assets/images/User.png'
import {NavLink} from "react-router-dom";

const UsersItem = (props) => {
    return (
        <div className={style.row}>
            <div className={style.leftColumn}>
                <div>
                    <NavLink to={'/profile/' + props.state.id}>
                        <img className={style.avatar}
                             src={props.state.photos.small != null ? props.state.photos.small : userPhoto}
                             alt=""/>
                    </NavLink>
                </div>
                <div>
                        <button disabled={props.followingProcess.some(id => id === props.state.id)} className={style.followButton}
                                 onClick={() => {
                                     props.state.followed ? props.unFollow(props.state.id) : props.follow(props.state.id)
                        }}>{props.state.followed ? 'Follow' : 'unFollow'}</button>
                </div>
            </div>
            <div className={style.rightColumn}>
                <div className={style.descr}>
                    <div className={style.info}>
                        <div className={style.fullName}>{props.state.name}</div>
                        <div className={style.status}>{props.state.status}</div>
                    </div>
                    <div className={style.location}>
                        <div className={style.country}>"props.location.country"</div>
                        <div className={style.city}>"props.location.city"</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default UsersItem;
