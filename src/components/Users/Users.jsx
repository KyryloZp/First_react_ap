import React from 'react';
import style from './Users.module.css';
import UsersItem from "./UserItem/usersItem";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {

    return (
        <div className={style.Users}>
            <Paginator  totalItemCount={props.totalUserCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChange={props.onPageChange} />
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