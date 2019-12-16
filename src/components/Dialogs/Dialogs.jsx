import React from 'react'
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {
    let Message =  props.messageList.map(m => <Messages content={m.message} key={m.id} accountId={m.accountId}/>);
    let DialogList = props.dialogList.map(d => <Dialog name={d.name}  key={d.id} accountId={d.id}/>);
    let newMessage = props.newMessage;

    let addMessage = () => {
        props.postMessage();
    };

    let updateMessage = (e)=> {
        let message = e.target.value;
        props.updateMessage(message);
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