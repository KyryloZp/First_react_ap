import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";
import {addPostActionCreactor, updatePostActionCreator} from "../../../Redux/State";


const Posts = (props) => {
    const message = props.state.postList.map(m => <Post id={m.id} message={m.message}/>);
    let newPostText = props.state.newPostText;

    let addPost = () => { props.dispatch(addPostActionCreactor()); };

    let updatePostText = (e) => {
        let textValue = e.target.value;
        props.dispatch(updatePostActionCreator(textValue));
    };
    return (
        <div className={s.wall}>
            <textarea className="textInput" onChange={updatePostText} value={newPostText} placeholder='Enter your post'></textarea>
            <button onClick={addPost}>Add post</button>
            <div className={s.posts}>
                {message}
            </div>
        </div>
    );
};

export default Posts;
