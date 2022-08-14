import React from "react";
import { Link } from "react-router-dom";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li className="menu-list">
        <Link to="/">
            <p className="menu-code">Chapter .01</p>
            <p className="menu-title">Home</p>
        </Link>
      </li>
      <li className="menu-list">
        <Link to="/projects">
          <p className="menu-code">Chapter .02</p>
          <p className="menu-title">Projects</p>
        </Link>
      </li>
      <li className="menu-list">
        <Link to="/about">
            <p className="menu-code">Chapter .03</p>
            <p className="menu-title">About Me</p>
        </Link>
      </li>
      <li className="menu-list">
        <p className="menu-code">Chapter .04</p>
        <p className="menu-title">Resume</p>
      </li>
    </ul>
  </div>
);