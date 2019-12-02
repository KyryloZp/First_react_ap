import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={s.info}>
            <div className={s.avatar}>
                <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" alt="s" />
            </div>
            <div className={s.about}>
                <div className={s.name}>
                    David Guetta
                </div>
                <div className={s.dateBirth}>
                    2 january
                </div>
                <div className={s.city}>
                    Lodon
                </div>
                <div className={s.education}>
                    Hight
                </div>
                <div className={s.webSite}>
                    www.london.com
                </div>
            </div>
        </div>
            );
};

export default ProfileInfo;
