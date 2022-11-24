import React from "react";

import s from './Profile.module.css';

const Profile = () => (
    <div className={s.Content}>
        <div>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
        </div>
        <div>
            ava + desc
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.Posts}>
                <div className={s.Item}>
                    Post1
                </div>
                <div className={s.Item}>
                    Post2
                </div>
                <div className={s.Item}>
                    Post3
                </div>
            </div>
        </div>
    </div>
)

export default Profile