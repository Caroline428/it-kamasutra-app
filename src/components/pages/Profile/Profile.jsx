import React from "react";

import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => (
    <div>
        <div>
            <img
                src="https://weblinks.ru/wp-content/uploads/2022/02/Krasivye-kartinki-leta-na-zastavku-telefona-1.jpg"/>
        </div>
        <div>
            ava + desc
        </div>
        <MyPosts/>
    </div>
)

export default Profile