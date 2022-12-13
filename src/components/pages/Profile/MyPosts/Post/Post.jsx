import React from "react";

import s from './Post.module.css';

const Post = ({message, likesCount}) => (
    <div className={s.Item}>
        <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"/>
        {message}
        <div>
            <span>like {likesCount}</span>
        </div>
    </div>
)

export default Post
