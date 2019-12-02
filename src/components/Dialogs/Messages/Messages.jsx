import React from 'react'
import s from './Messages.module.css'
import './Messages.module.css'




const Messages = (props) => {
    return (
        <div className={`${s.item} ${ props.accountId =='ac_0' ? s.ac_0 : s.ac_1 }`} >
            <span>{props.content}</span>
        </div>
    );
}

export default Messages;