import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavMenu = () => {
    return (
        <div className="menu">
            <ul>
            <li className="menu-list">
            <NavLink to="/" activeClassName="active">
                <p className="menu-code">01</p>
                <p className="menu-title">Home</p>
            </NavLink>
            </li>
            <li className="menu-list menu-item-one">
                <NavLink to="/about">
                    <p className="menu-code">02</p>
                    <p className="menu-title">Who Am I</p>
                </NavLink>
            </li>
            <li className="menu-list">
                <a href="https://drive.google.com/file/d/1SaWQb4Nu5h4QirR0SDoWhF6Iq3edZ1fw/view?usp=sharing" target="_blank">
                <p className="menu-code">03</p>
                <p className="menu-title">Resume</p>
                </a>
            </li>
            </ul>
        </div>
    );
};

export default NavMenu;

