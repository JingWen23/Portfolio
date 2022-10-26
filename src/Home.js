// import { Link } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import HomeIntro from "./asset/HomeIntro.png";
import Logo from "./asset/Logo.png";
import HomeProjOneCover from "./asset/HomeProjOneCover.jpg";
import HomeProjTwoCover from "./asset/HomeProjTwoCover.jpg";
import HomeProjThreeCover from "./asset/HomeProjThreeCover.jpg";
import HomeProjFourCover from "./asset/HomeProjFourCover.jpg";
import FooterEmail from "./asset/FooterEmail.png";
import FooterLinkedIn from "./asset/FooterLinkedIn.png";
import FooterBehance from "./asset/FooterBehance.png";
import FooterEmailHover from "./asset/FooterEmail.png";
import FooterLinkedInHover from "./asset/FooterLinkedIn.png";
import FooterBehanceHover from "./asset/FooterBehance.png";
import ProjFiveCover from "./asset/ProjFiveCover.jpg";
import ButtonMailTo from "./component/ButtonMailTo";
import { Link, NavLink } from "react-router-dom";
import NavMenu from './component/NavMenu';
import "./App.css";



const contentStyle = {
  
      background: "rgba(255,255,255,0",
      width: "80%",
      border: "none"
    };

const Home = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
    <div>

      <div class="content-area">

        <nav role="navigation" className="mobile-nav">
            <div id="menuToggle">

              <input type="checkbox" />
            
              <span></span>
              <span></span>
              <span></span>
      
              <ul id="menu">
                <li>
                  <NavLink to="/" activeClassName="active">
                      <p className="menu-code">01</p>
                      <p className="menu-title">Home</p>
                  </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        <p className="menu-code">02</p>
                        <p className="menu-title">Who Am I</p>
                    </NavLink>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1SaWQb4Nu5h4QirR0SDoWhF6Iq3edZ1fw/view?usp=sharing" target="_blank">
                    <p className="menu-code">03</p>
                    <p className="menu-title">Resume</p>
                    </a>
                </li>
              </ul>
            </div>
          </nav>


        <NavMenu />

        <div className="wrapper-grid">
          <div className="one">
            <img src={HomeIntro} className="home-intro-img" alt="Logo" />
          </div>
          <div className="two">
            <h5 className="home-titletwo">Hello.</h5>
            <p className="home-titlefour">I’m a ux designer and an app develop based in Sydney, Australia. I am passionate in producing creations that can bring an impact to the society and is constantly searching for opportunities to further develop my skills.</p>
          </div>
        </div>

        <div className="phone-wrapper-grid">
          <div className="phone-home-intro-container">
          <img src={HomeIntro} className="phone-home-intro-img" alt="Logo" />
          <h5 className="home-titletwo">Hello.</h5>
          <p className="home-titlefour">I’m a ux designer and an app develop based in Sydney, Australia. I am passionate in producing creations that can bring an impact to the society and is constantly searching for opportunities to further develop my skills.</p>
          </div>
        </div>

        <div className="home-project-grid">
          <h1 className="home-title">My Sample Work</h1>
          <div className="home-sample-grid">
            <Link to="/project/3" className="proj-one">
              <div className="overlay"></div>
                <img src={HomeProjOneCover} className="home-sample-img" alt="Logo" />
                  <div class="content-details fadeIn-bottom">
                    <h2 class="content-title">Pet Adoption Website</h2>
                    <p className="content-subtitle">Figma | UX Design</p>
							  </div>  
            </Link>
            <Link to="/project/1" className="proj-one">
              <div className="overlay"></div>
                <img src={HomeProjTwoCover} className="home-sample-img" alt="Logo" />
                  <div class="content-details fadeIn-bottom">
								    <h2 class="content-title">Medicine Reminder App and Responsive Website</h2>
                    <p className="content-subtitle">Figma | UX Design</p>
							    </div>  
            </Link>
            <Link to="/project/2" className="proj-one">
              <div className="overlay"></div>
                <img src={HomeProjThreeCover} className="home-sample-img" alt="Logo" />
                  <div class="content-details fadeIn-bottom">
								    <h2 class="content-title">Memory Collection App</h2>
                    <p className="content-subtitle">Figma | React Native | UX Design | Coding</p>
							</div>  
            </Link>
            <Link to="/project/3" className="proj-one">
              <div className="overlay"></div>
                <img src={HomeProjFourCover} className="home-sample-img" alt="Logo" />
                  <div class="content-details fadeIn-bottom">
                    <h2 class="content-title">Bakery Shopping Website</h2>
                    <p className="content-subtitle">Figma | React JS | UX Design | Coding</p>
							    </div>  
            </Link>
          </div>
        </div>

        <div className="phone-home-project-grid">
          <h1 className="home-title">My Sample Work</h1>
          <div className="phone-home-sample-grid">
            <Link to="/project/3" className="proj-one">
              <div className="overlay"></div>
                <img src={HomeProjOneCover} className="home-sample-img" alt="Logo" />
                  <div class="content-details fadeIn-bottom">
                    <h2 class="content-title">Pet Adoption Website</h2>
                    <p className="content-subtitle">Figma | UX Design</p>
							  </div>  
            </Link>
            <Link to="/project/1" className="proj-one">
              <div className="overlay"></div>
                <img src={HomeProjTwoCover} className="home-sample-img" alt="Logo" />
                  <div class="content-details fadeIn-bottom">
								    <h2 class="content-title">Medicine Reminder App and Responsive Website</h2>
                    <p className="content-subtitle">Figma | UX Design</p>
							    </div>  
            </Link>
            <Link to="/project/2" className="proj-one">
              <div className="overlay"></div>
                <img src={HomeProjThreeCover} className="home-sample-img" alt="Logo" />
                  <div class="content-details fadeIn-bottom">
								    <h2 class="content-title">Memory Collection App</h2>
                    <p className="content-subtitle">Figma | React Native | UX Design | Coding</p>
							</div>  
            </Link>
            <Link to="/project/3" className="proj-one">
              <div className="overlay"></div>
                <img src={HomeProjFourCover} className="home-sample-img" alt="Logo" />
                  <div class="content-details fadeIn-bottom">
                    <h2 class="content-title">Bakery Shopping Website</h2>
                    <p className="content-subtitle">Figma | React JS | UX Design | Coding</p>
							    </div>  
            </Link>
          </div>
        </div>

        <div className="footer">
          <div className="footer-list">
            <a href="https://drive.google.com/file/d/1NTr7ehUjws0L0CQPSluDE_OXJKPVT4LF/view?usp=sharing">
              <div className="footer-behance"/>
            </a>
          </div>
          <div className="footer-list">
            <a href="https://www.linkedin.com/in/jingwen-ng/">
              <div className="footer-linkedin"/>
            </a>
          </div>
          <div className="footer-list">
            <a href="mailto:jingwen9@gmail.com">
              <div className="footer-email" />
            </a>
          </div>
        </div>   

      </div>

      </div>
    )
}

export default Home;