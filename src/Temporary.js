import { Link } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import HomeIntro from "./asset/HomeIntro.png";
import AboutIntro from "./asset/AboutIntro.jpg";
import Logo from "./asset/Logo.png";
import ProjOne from "./asset/ProjOne.png";
import ProjTwo from "./asset/ProjTwo.jpg";
import ProjTwoPhone from "./asset/ProjTwoPhone.png";
import ProjThree from "./asset/ProjThree.jpg";
import ProjFour from "./asset/ProjFour.png";
import ProjFive from "./asset/ProjFive.jpg";
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

{/* 
        <ul className="projects-footer">
          <li className="projects-footer-link">© 2022 Jing Wen Ng </li>
          <li className="projects-footer-link-two">LinkedIn</li>
          <li className="projects-footer-link-two">Email</li>
        </ul> */}
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
//   return (
//     <div>
//       <h1>This is the home page</h1>
//       <Link to="about">Click to view our about page</Link>
//       <Link to="contact">Click to view our contact page</Link>
//     </div>
//   );
}

export default Temporary;