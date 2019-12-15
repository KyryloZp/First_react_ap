import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";


const Posts = (props) => {
    const message = props.postList.map(m => <Post id={m.id} key={m.id} message={m.message}/>);
    let newPostText = props.newPostValue;

    let addPost = () => { props.addNewPost()};

    let updatePostText = (e) => {
        let textValue = e.target.value;
        props.updateNewPost(textValue);
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
