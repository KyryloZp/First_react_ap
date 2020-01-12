import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators";
import {renderTextarea} from "../../common/FormsControls/FormsControls";

let maxFormLength = maxLength(5);

let PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className="textInput" name={'newPost'} placeholder='Enter your post' component={renderTextarea} validate={[required, maxFormLength]}></Field>
            <button type={'submit'}>Add post</button>
        </form>
    )
}

PostForm = reduxForm({
    form: 'PostForm'
})(PostForm)

const Posts = (props) => {
    const message = props.postList.map(m => <Post id={m.id} key={m.id} message={m.message}/>);
    const onSubmit = (formData) => { props.addNewPost(formData.newPost)};

    return (
        <div className={s.wall}>
            <PostForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {message}
            </div>
        </div>
    );
};

export default Posts;
