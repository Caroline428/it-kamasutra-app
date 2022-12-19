import React from "react";
import s from './Navbar.module.css';

import NavLink from '../CoreComponents/NavLink'

const Navbar = () => {
    return (
        <nav className={s.Nav}>
            <div className={s.Item}>
                <NavLink to="/profile" title={"Profile"}/>
            </div>
            <div className={s.Item}>
                <NavLink to="/dialogs" title={"Messages"}/>
            </div>
            <div className={`${s.Item}`}>
                <NavLink to="/news" title={"News"}/>
            </div>
            <div className={s.Item}>
                <NavLink to="/music" title={"Music"}/>
            </div>
            <div className={s.Item}>
                <NavLink to="/settings" title={"Settings"}/>
            </div>
        </nav>
    )
}

export default Navbar