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

function Projects() {

    return (
    <div>
        <Link to="/"><img src={Logo} className="logo-home" alt="Logo" /></Link>
        <div className="home-container">
            <div className="home-guide">
            {/* <ul>
                <li onClick={() => scrollToSection(homeIntro)} className="home-link">00</li>
                <li onClick={() => scrollToSection(projoneIntro)} className="home-link">01</li>
                <li onClick={() => scrollToSection(projtwoIntro)} className="home-link">02</li>
                <li onClick={() => scrollToSection(projthreeIntro)} className="home-link">03</li>
                <li onClick={() => scrollToSection(projfourIntro)} className="home-link">04</li>
                <li onClick={() => scrollToSection(projfiveIntro)} className="home-link">05</li>
            </ul> */}
            </div>
        </div>

        <div className="proj-content-area">

            <div className="proj-title-container">
                <h5 className="allproj-title">All Projects</h5>
            </div>


            <div className="projects-wrapper-grid">
                <Link to="/project/2" className="proj-one">
                    <div className="overlay"></div>
                    <img src={ProjThree} className="proj-three-img" alt="Logo" />
                            <div class="content-details fadeIn-bottom">
								<h2 class="content-title">Memory Collection App</h2>
							</div>
                        
                </Link>
                <Link to="/project/1"  className="proj-two">
                    <div className="overlay"></div>
                        <img src={ProjTwo} className="proj-two-img" alt="Logo" />
                            <div class="content-details fadeIn-bottom">
								<h2 class="content-title">Medicine Reminder App and Responsive Website</h2>
							</div>
                </Link>
                {/* <Link to="/project/3" className="proj-one"> */}
                <Link to="/project/3" className="proj-three">
                    
                            <div className="overlay"></div>
                        <img src={ProjFour} className="proj-one-img" alt="Logo" />
                                <div class="content-details fadeIn-bottom">
                                    <h2 class="content-title">Pet Adoption Website</h2>
                                </div>
                
                </Link>
            </div>

            <Link to="/project/4" className="projects-single-wrapper-grid">
                <div className="proj-five">
                        <div className="overlay"></div>
                        <img src={ProjFive} className="proj-one-img" alt="Logo" />
                                <div class="content-details fadeIn-bottom">
                                    <h2 class="content-title">Bakery Shopping Website</h2>
                                </div>
                </div>
                    {/* <img src={ProjFour} className="proj-one-img" alt="Logo" />
                    <img src={ProjFive} className="proj-one-img" alt="Logo" /> */}
            </Link>

            {/* <div className="projects-phone-wrapper-grid">
                <img src={ProjOne} className="proj-one-img" alt="Logo" />
				<h2 class="content-title">Organic Pet Food Ordering App</h2>
            </div> */}

            <div className="projects-phone-wrapper-grid">
                <Link to="/project/1"  className="proj-two">
                    <img src={ProjTwoPhone} className="proj-one-img" alt="Logo" />
                    <h2 class="content-title">Medicine Reminder App and Responsive Website</h2>
                </Link>
            </div>

            <div className="projects-phone-wrapper-grid">
                <Link to="/project/2"  className="proj-two">
                <img src={ProjThree} className="proj-one-img" alt="Logo" />
				<h2 class="content-title">Memory Collection App</h2>
                </Link>
            </div>

            <div className="projects-phone-wrapper-grid">
                <Link to="/project/3"  className="proj-two">
                <img src={ProjFour} className="proj-one-img" alt="Logo" />
				<h2 class="content-title">Pet Adoption Website</h2>
                </Link>
            </div>

            <div className="projects-phone-wrapper-grid">
                <Link to="/project/4"  className="proj-two">
                <img src={ProjFive} className="proj-one-img" alt="Logo" />
				<h2 class="content-title">Bakery Shopping Website</h2>
                </Link>
            </div>





        <ul className="projects-footer">
          <li className="projects-footer-link">© 2022 Jing Wen Ng </li>
          <li className="projects-footer-link-two">LinkedIn</li>
          <li className="projects-footer-link-two">Email</li>
        </ul>
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

export default Projects;