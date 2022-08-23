import React from "react";
import { Link, NavLink } from "react-router-dom";

export default ({ close }) => (

  <div className="menu">
    <ul>
      <li className="menu-list">
      <NavLink to="/" activeClassName="active">
          <p className="menu-code">Chapter .01</p>
          <p className="menu-title">Home</p>
      </NavLink>
      </li>
      <li className="menu-list">
        <NavLink to="/projects" activeClassName="active">
          <p className="menu-code">Chapter .02</p>
          <p className="menu-title">Projects</p>
        </NavLink>
      </li>
      <li className="menu-list">
        <NavLink to="/about">
            <p className="menu-code">Chapter .03</p>
            <p className="menu-title">About Me</p>
        </NavLink>
      </li>
      <li className="menu-list">
        <NavLink to ="/resume">
          <p className="menu-code">Chapter .04</p>
          <p className="menu-title">Resume</p>
        </NavLink>
      </li>
    </ul>
  </div>
);