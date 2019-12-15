import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProcess,
    toggleIsFetching,
    unfollow
} from "../../Redux/usersPage-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            this.props.getUsers(this.props.usersPage.pageSize, this.props.usersPage.currentPage);
        }
    }

    onPageChange = (currentPage) => {
        this.props.getUsers(this.props.usersPage.pageSize, currentPage);
    }
    render = () => {
        return <>
            {this.props.usersPage.isFetching && <Preloader />}
            <Users usersList={this.props.usersPage.users}
                   totalUserCount={this.props.usersPage.totalUserCount}
                   currentPage={this.props.usersPage.currentPage}
                   pageSize={this.props.usersPage.pageSize}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChange={this.onPageChange}
                   toggleFollowingProcess={this.props.toggleFollowingProcess}
                   followingProcess={this.props.usersPage.followingProcess}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {usersPage: state.usersPage}
};

export default connect(mapStateToProps, {follow, unfollow, toggleIsFetching, toggleFollowingProcess, getUsers})(UsersContainer);