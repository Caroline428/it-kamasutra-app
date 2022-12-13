import React from "react";

import s from './Navbar.module.css';

const Navbar = ()  => {
    return (
        <nav className={s.Nav}>
            <div className={s.Item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={s.Item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={`${s.Item} ${s.Active}`}>
                <a href="/news">News</a>
            </div>
            <div className={s.Item}>
                <a href="/music">Music</a>
            </div>
            <div className={s.Item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar