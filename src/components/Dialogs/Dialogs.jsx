import React from 'react'
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import {getAuthLogIn} from "../../Redux/auth-reducer";
import {maxLength, required} from "../../utils/validators";
import {renderTextarea} from "../common/FormsControls/FormsControls";

const maxFormLength = maxLength(5);


let DialogForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
       <Field name="message" className={s.textBox} component={renderTextarea} placeholder='Enter your message' validate={[required, maxFormLength]} />
        <button className={s.addMessage} type='submit'>Add message</button>
    </form>
    )}

    DialogForm = reduxForm({
        form: 'DialogForm'
    })(DialogForm);

const Dialogs = (props) => {
    let Message = props.messageList.map(m => <Messages content={m.message} key={m.id} accountId={m.accountId}/>);
    let DialogList = props.dialogList.map(d => <Dialog name={d.name} key={d.id} accountId={d.id}/>);

    const onsubmit = (formData) => {
        props.postMessage(formData.message)
    };

    return (
        <div className={s.dialogs}>
            <h2 className={s.title}>Диалоги</h2>
            <div className={s.dialogeList}>
                {DialogList}
            </div>
            <div className={s.messagBlock}>
                <div className={s.messages}>
                    {Message}
                </div>
                <DialogForm  onSubmit={onsubmit}/>
            </div>

        </div>
    );
}

export default Dialogs;