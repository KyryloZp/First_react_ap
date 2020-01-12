import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo, getStatus, postStatus} from "../../Redux/profilePage-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = (this.props.match.params.userId);
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
               this.props.history.push('/login')
            }

        }

        this.props.getProfileInfo(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     postStatus={this.props.postStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.userStatus,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getProfileInfo, getStatus, postStatus}),
    withRouter
)(ProfileContainer)