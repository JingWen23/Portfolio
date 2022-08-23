import { Link } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Logo from "./asset/Logo.png";
import NavMenu from "./NavMenu";
import "./App.css";


const contentStyle = {
      background: "rgba(255,255,255,0",
      width: "80%",
      border: "none"
    };

function Temporary() {

    return (
    <div>
        <Link to="/"><img src={Logo} className="logo-home" alt="Logo" /></Link>
        <div className="home-container">
            <div className="home-guide">
            </div>
        </div>

        <div className="temporary-content-area">
            <h2 className="temporary-title">Under construction...</h2>
        </div>

      <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <NavMenu close={close} />}
    </Popup>
      </div>
    )
}

export default Temporary;