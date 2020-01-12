import React from 'react';
import {Field, reduxForm} from "redux-form";
import {getAuthLogIn} from "../../Redux/auth-reducer";
import {maxLength, required} from "../../utils/validators";
import {renderInput} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";

const maxFormLength = maxLength(5);


let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="Login" component={renderInput} placeholder={'Login'} validate={[required]} />
            <Field name="password" component={renderInput} placeholder={'password'} validate={[required]} placeholder={'password'}/>
            <Field name="rememberMy" component={renderInput} type="checkbox"/>rememberMy
            <button type="submit">Submit</button>
            {props.error && <div>{props.error}</div>}
        </form>
    )
}

LoginForm = reduxForm({
    form: 'Login'
})(LoginForm)


const Login = (props) => {
    const onsubmit = (formData) => {
        props.getAuthLogIn(formData.Login, formData.password, formData.rememberMy)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={onsubmit}/>
        </div>
    );

}

export default connect(null, {getAuthLogIn})(Login);