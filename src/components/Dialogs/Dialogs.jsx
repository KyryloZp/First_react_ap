import React from 'react'
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/State";


const Dialogs = (props) => {
    let Message =  props.state.messageList.map(m => <Messages content={m.message} accountId={m.accountId}/>);
    let DialogList = props.state.dialogList.map(d => <Dialog name={d.name} accountId={d.id}/>);
    let newMessage = props.state.newMessage;

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let updateMessage = (e)=> {
        let message = e.target.value;
        props.dispatch(updateMessageActionCreator(message));
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
                <textarea name="name" className={s.textBox}
                          value={newMessage} onChange={updateMessage} placeholder='Enter your message'/>
                <button className={s.addMessage} onClick={addMessage}>Add message</button>
            </div>

        </div>
    );
}

export default Dialogs;