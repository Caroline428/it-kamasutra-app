import React from "react";
import s from './NavLink.module.css';
import {NavLink as BaseNavLink} from "react-router-dom";

const NavLink = ({to, title}) => { // TODO разобраться, лучшее это решение или нет
    return (
        <BaseNavLink to={to} className={({isActive}) => isActive ? s.Active : s.Inactive}>
            {title}
        </BaseNavLink>
    )
}

export default NavLink