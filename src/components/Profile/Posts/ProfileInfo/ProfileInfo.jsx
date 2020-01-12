import React, {useState, useEffect} from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] );

    let editModeActivate = () => {
        setEditMode(true);
    };

    let DeactivateEditMode = () => {
        setEditMode(false);
        props.postStatus(status);
    };

    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div className={s.info}>
            <div className={s.avatar}>
                <img src={props.state.photos.small} alt="s"/>
            </div>
            <div className={s.about}>
                <div className={s.name}>
                    {props.state.fullName}
                </div>
                <div className={s.status}>
                    {editMode ? <input value={status} onBlur={DeactivateEditMode}
                                                  autoFocus={true} onChange={onChangeStatus}/>
                        : <span onDoubleClick={editModeActivate}>{props.status || 'Статуса нет'}</span>}
                </div>
                <div className={s.jobDesrc}>
                    {props.state.lookingForAJobDescription}
                </div>
                <div className={s.lookingJob}>
                    {props.state.lookingForAJob ? 'В поисках' : 'Работаю'}
                </div>
                <div className={s.webSite}>
                    <h3>Contacts:</h3>
                    <div className={s.webSite}>
                        <span>facebook:</span>
                        <span>{props.state.contacts.facebook}</span>
                    </div>
                    <div className={s.webSite}>
                        <span>website:</span>
                        <span>{props.state.contacts.website}</span>
                    </div>
                    <div className={s.webSite}>
                        <span>vk:</span>
                        <span>{props.state.contacts.vk}</span>
                    </div>
                    <div className={s.webSite}>
                        <span>twitter:</span>
                        <span>{props.state.contacts.twitter}</span>
                    </div>
                    <div className={s.webSite}>
                        <span>instagram:</span>
                        <span>{props.state.contacts.instagram}</span>
                    </div>
                    <div className={s.webSite}>
                        <span>youtube:</span>
                        <span>{props.state.contacts.youtube}</span>
                    </div>
                    <div className={s.webSite}>
                        <span>github:</span>
                        <span>{props.state.contacts.github}</span>
                    </div>
                    <div className={s.webSite}>
                        <span>mainLink:</span>
                        <span>{props.state.contacts.mainLink}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
