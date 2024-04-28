import { NavLink, Link } from "react-router-dom";
import logoImg from "../../images/logo.png";
import style from './Header.module.css';
import { useRef } from "react";
//@ts-ignore
import { fadeOut } from 'react-animations'


export const Header = () => {
    
    return (
        <header className={style.up}>
            <NavLink
                className={({ isActive }) => (isActive ? style.active : style.link)}
                to="/main"
            ><img
                    className={style.logo}
                    src={logoImg}
                    alt=""
                /></NavLink>
            <div className={style.onColumn}>
                <NavLink
                    className={({ isActive }) => (isActive ? style.active : style.link)}
                    to="/main"
                ><h2>Store</h2></NavLink>

                <NavLink
                    className={({ isActive }) => (isActive ? (style.downanim,style.fadeOut) : style.net)}
                    to="/main"
                ><div id="m1" ></div></NavLink>
            </div>
            <div className={style.onColumn}>
                <NavLink
                    className={({ isActive }) => (isActive ? style.active : style.link)}
                    
                    to="/home"
                ><h2>Home</h2></NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? (style.downanim,style.fadeOut) : style.net)}
                    to="/home"
                    
                ><div></div></NavLink>
            </div>

        </header>
    )
}