import React from "react";

import s from './Post.module.css';

const Post = () => (
    <div className={s.Item}>
        <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"/>
        Post1
        <div>
            <span>like</span>
        </div>
    </div>
)

export default Post
