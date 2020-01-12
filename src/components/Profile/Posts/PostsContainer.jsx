import React from 'react';
import {addNewPost} from "../../../Redux/profilePage-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
       postList: state.profilePage.postList
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
       addNewPost: (text) => {
           debugger;
          dispatch(addNewPost(text));
       }
    }
}


let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;