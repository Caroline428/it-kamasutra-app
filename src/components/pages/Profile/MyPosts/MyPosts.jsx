import React from "react";

import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => (
    <div className={s.MyPosts}>
        <h3>My posts </h3>
        <div className={s.AddPostBlock}>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Add Button</button>
            </div>
        </div>
        <div>
            <Post message="Привет как дела" likesCount={2}/>
            <Post message="Мяу мяу мур" likesCount={10}/>
            <Post/>
        </div>
    </div>
)

export default MyPosts
