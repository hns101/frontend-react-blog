import React from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo-medium.png'

function Navbar() {
    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <img className="header-logo-img" src={logo} alt="logo" />
                </div>
                <nav>
                    <ul className="nav">
                        <li >
                            <NavLink to="/"
                                     className={({ isActive }) => !isActive
                                         ? "nav-item":"nav-item-active"} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/allposts"
                                     className={({ isActive }) => !isActive
                                         ? "nav-item":"nav-item-active"} >Alle posts</NavLink>
                        </li>
                        <li >
                            <NavLink to="/addpost"
                                     className={({ isActive }) => !isActive
                                         ? "nav-item":"nav-item-active"}>Nieuwe post</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;