import React from 'react';
import style from './Users.module.css';
import UsersItem from "./UserItem/usersItem";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let pagesButton = pages.map(i => <button
        className={props.currentPage === i ? style.selectPage : style.pageCount}
        onClick={() => {props.onPageChange(i)}}>{i}</button>);
    return (
        <div className={style.Users}>
            {pagesButton}
            <div className={style.title}>
                <h3>Users</h3>
            </div>
            <div className={style.content}>
                {props.usersList.map(i => <UsersItem state={i} follow={props.follow}
                                                          unFollow={props.unfollow}
                                                     toggleFollowingProcess={props.toggleFollowingProcess}
                                                     followingProcess={props.followingProcess}/>)}
            </div>
        </div>
    )
}

export default Users;