import React from "react";

import s from './ProfileInfo.module.css';

const ProfileInfo = () => (
    <div>
        <div>
            <img
                src="https://weblinks.ru/wp-content/uploads/2022/02/Krasivye-kartinki-leta-na-zastavku-telefona-1.jpg"/>
        </div>
        <div className={s.Description}>
            ava + desc
        </div>
    </div>
)

export default ProfileInfo