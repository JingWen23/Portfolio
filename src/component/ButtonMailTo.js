import React from "react";
import { Link } from "react-router-dom";

const ButtonMailTo = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
            className="email-button"
        >
            Email
        </Link>
    );
};

export default ButtonMailTo;