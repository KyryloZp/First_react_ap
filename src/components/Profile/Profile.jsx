import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <img
                src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                alt="" className={s.wallper}/>
            <ProfileInfo state={props.profile}/>
            <PostsContainer  />
        </div>
    );
};

export default Profile;
