import React from 'react';
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <img
                src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                alt="" className={s.wallper}/>
            <ProfileInfo />
            <Posts state={props.state} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;
