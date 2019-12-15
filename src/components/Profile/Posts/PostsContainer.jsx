import React from 'react';
import {addPostActionCreactor, updatePostActionCreator} from "../../../Redux/profilePage-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
       postList: state.profilePage.postList,
       newPostValue: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
       addNewPost: () => {
          dispatch(addPostActionCreactor());
       },
       updateNewPost: (text) => {
           dispatch(updatePostActionCreator(text));
       }
    }
}


let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;