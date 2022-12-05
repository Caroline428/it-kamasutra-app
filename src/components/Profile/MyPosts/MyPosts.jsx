import React from "react";

import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => (
    <div>
        My posts
        <div>
            <textarea/>
            <button>Add Button</button>
        </div>
        <div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
)

export default MyPosts
