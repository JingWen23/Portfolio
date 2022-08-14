import { Link } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import HomeIntro from "./asset/HomeIntro.png";
import Logo from "./asset/Logo.png";
import ProjOneCover from "./asset/ProjOneCover.jpg";
import ProjTwoCover from "./asset/ProjTwoCover.jpg";
import ProjThreeCover from "./asset/ProjThreeCover.jpg";
// import ProjFourCover from "./asset/ProjFourCover.jpg";
import ProjFiveCover from "./asset/ProjFiveCover.jpg";
import NavMenu from "./NavMenu";
import "./App.css";


const contentStyle = {
      background: "rgba(255,255,255,0",
      width: "80%",
      border: "none"
    };

function Home() {
    const homeIntro = useRef(null);
  const projoneIntro = useRef(null);
  const projtwoIntro = useRef(null);
  const projthreeIntro = useRef(null);
  // const projfourIntro = useRef(null);
  const projfiveIntro = useRef(null);

  const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };

    return (
    <div>
        <Link to="/"><img src={Logo} className="logo-home" alt="Logo" /></Link>
    <div className="home-container">
        <div className="home-guide">
          <ul>
            <li onClick={() => scrollToSection(homeIntro)} className="home-link">00</li>
            <li onClick={() => scrollToSection(projoneIntro)} className="home-link">01</li>
            <li onClick={() => scrollToSection(projtwoIntro)} className="home-link">02</li>
            <li onClick={() => scrollToSection(projthreeIntro)} className="home-link">03</li>
            {/* <li onClick={() => scrollToSection(projfourIntro)} className="home-link">04</li> */}
            <li onClick={() => scrollToSection(projfiveIntro)} className="home-link">04</li>
          </ul>
        </div>
      </div>

      <div class="content-area">

        <div ref={homeIntro} className="wrapper-grid">
          <div className="one">
            <img src={HomeIntro} className="home-intro-img" alt="Logo" />
          </div>
          <div className="two">
            <h2 className="home-intro-titleone">UX Designer</h2>
            <h2 className="home-intro-titletwo">App Developer</h2>
          </div>
        </div>

        <div ref={projoneIntro} className="projone-wrapper-grid">
          <div className="one">
            <div>
              <h5 className="proj-cover-titleone">Project .01</h5>
              <h4 className="proj-cover-titletwo">Medicine Reminder App and Responsive Website</h4>
              <p className="proj-cover-titlethree">Figma | UX Design</p>
              <Link to="/project/1" className="proj-cover-titlefour">VIEW PROJECT + </Link>
            </div>
          </div>
          <div className="two">
            <img src={ProjOneCover} className="projone-cover-img" alt="Logo" />
          </div>
        </div>

        <div className="projone-phone-wrapper-grid">
            <img src={ProjOneCover} className="projone-cover-img" alt="Logo" />
            <div>
              <h5 className="proj-cover-titleone">Project .01</h5>
              <h4 className="proj-cover-titletwo">Medicine Reminder App and Responsive Website</h4>
              <p className="proj-cover-titlethree">Figma | UX Design</p>
              <p className="proj-cover-titlefour">VIEW PROJECT + </p>
            </div>
        </div>

        <div ref={projtwoIntro} className="projfour-wrapper-grid">
          <div className="one">
            <div>
              <img src={ProjTwoCover} className="projfour-cover-img" alt="Logo" />
            </div>
          </div>
          <div className="one-three">
            <h5 className="proj-cover-titleone">Project .02</h5>
            <h4 className="proj-cover-titletwo">Memory Collection App</h4>
            <p className="proj-cover-titlethree">Figma | React Native | UX Design | Coding</p>
            <p className="proj-cover-titlefour">VIEW PROJECT + </p>
          </div>
        </div>

        <div className="projtwo-phone-wrapper-grid">
            <img src={ProjTwoCover} className="projtwo-cover-img" alt="Logo" />
            <div>
              <h5 className="proj-cover-titleone">Project .02</h5>
              <h4 className="proj-cover-titletwo">Memory Collection App</h4>
              <p className="proj-cover-titlethree">Figma | React Native | UX Design | Coding</p>
              <p className="proj-cover-titlefour">VIEW PROJECT + </p>
            </div>
        </div>

        {/* <div ref={projtwoIntro} className="projtwo-wrapper-grid">
          <div className="one">
            <div>
              <img src={ProjTwoCover} className="projtwo-cover-img" alt="Logo" />
            </div>
          </div>
          <div className="two">
            <h5 className="proj-cover-titleone">Project .02</h5>
            <h4 className="proj-cover-titletwo">Organic Pet Food Ordering App</h4>
            <p className="proj-cover-titlethree">Figma | UX Design</p>
            <p className="proj-cover-titlefour">VIEW PROJECT + </p>
          </div>
        </div>

        <div className="projtwo-phone-wrapper-grid">
            <img src={ProjTwoCover} className="projtwo-cover-img" alt="Logo" />
            <div>
              <h5 className="proj-cover-titleone">Project .04</h5>
              <h4 className="proj-cover-titletwo">Memory Collection App</h4>
              <p className="proj-cover-titlethree">Figma | React Native | UX Design | Coding</p>
              <p className="proj-cover-titlefour">VIEW PROJECT + </p>
            </div>
        </div> */}

        <div ref={projthreeIntro} className="projthree-wrapper-grid">
          <div className="one-three">
            <div>
              <h5 className="proj-cover-titleone">Project .03</h5>
              <h4 className="proj-cover-titletwo">Pet Adoption Website</h4>
              <p className="proj-cover-titlethree">Figma | UX Design</p>
              <p className="proj-cover-titlefour">VIEW PROJECT + </p>
            </div>
          </div>
          <div className="two">
            <img src={ProjThreeCover} className="projthree-cover-img" alt="Logo" />
          </div>
        </div>

        <div className="projthree-phone-wrapper-grid">
            <img src={ProjThreeCover} className="projthree-cover-img" alt="Logo" />
            <div>
              <h5 className="proj-cover-titleone">Project .03</h5>
              <h4 className="proj-cover-titletwo">Pet Adoption Website</h4>
              <p className="proj-cover-titlethree">Figma | UX Design</p>
              <p className="proj-cover-titlefour">VIEW PROJECT + </p>
            </div>
        </div>

        <div ref={projfiveIntro} className="projfive-wrapper-grid">
          <div className="two">
            <img src={ProjFiveCover} className="projfive-cover-img" alt="Logo" />
          </div>
          <div className="one-three">
            <div>
              <h5 className="proj-cover-titleone">Project .04</h5>
              <h4 className="proj-cover-titletwo">Bakery Shopping Website</h4>
              <p className="proj-cover-titlethree">Figma | React JS | UX Design | Coding</p>
              <p className="proj-cover-titlefour">VIEW PROJECT + </p>
              <h2>test</h2>
            </div>
          </div>
          
        </div>

        <div className="projfive-phone-wrapper-grid">
            <img src={ProjFiveCover} className="projfive-cover-img" alt="Logo" />
            <div>
              <h5 className="proj-cover-titleone">Project .04</h5>
              <h4 className="proj-cover-titletwo">Bakery Shopping Website</h4>
              <p className="proj-cover-titlethree">Figma | React Native | UX Design | Coding</p>
              <p className="proj-cover-titlefour">VIEW PROJECT + </p>
            </div>
        </div>

        <ul className="footer">
          <li className="footer-link">© 2022 Jing Wen Ng </li>
          <li className="footer-link-two">LinkedIn</li>
          <li className="footer-link-two">Email</li>
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

export default Home;