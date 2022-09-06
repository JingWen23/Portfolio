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
import ButtonMailTo from "./component/ButtonMailTo";
import "./App.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });


const contentStyle = {
      background: "rgba(255,255,255,0",
      width: "80%",
      border: "none"
    };

function Home() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const homeIntro = useRef(null);
  const projoneIntro = useRef(null);
  const projtwoIntro = useRef(null);
  const projthreeIntro = useRef(null);
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

        <div ref={projoneIntro} className="projone-wrapper-grid" data-aos="fade-in">
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
              <Link to="/project/1" className="proj-cover-titlefour">VIEW PROJECT + </Link>
            </div>
        </div>


        {/* <div className="projone-phone-wrapper-grid">
            <img src={ProjOneCover} className="projone-cover-img" alt="Logo" />
            <div>
              <h5 className="proj-cover-titleone">Project .01</h5>
              <h4 className="proj-cover-titletwo">Medicine Reminder App and Responsive Website</h4>
              <p className="proj-cover-titlethree">Figma | UX Design</p>
              <Link to="/project/1" className="proj-cover-titlefour">VIEW PROJECT + </Link>
            </div>
        </div> */}

        <div ref={projtwoIntro} className="projfour-wrapper-grid" data-aos="fade-in">
          <div className="one">
            <div>
              <img src={ProjTwoCover} className="projfour-cover-img" alt="Logo" />
            </div>
          </div>
          <div className="one-three">
            <h5 className="proj-cover-titleone">Project .02</h5>
            <h4 className="proj-cover-titletwo">Memory Collection App</h4>
            <p className="proj-cover-titlethree">Figma | React Native | UX Design | Coding</p>
            <Link to="/project/2" className="proj-cover-titlefour">VIEW PROJECT + </Link>
            {/* <p className="proj-cover-titlefour">VIEW PROJECT + </p> */}
          </div>
        </div>

        <div className="projtwo-phone-wrapper-grid">
            <img src={ProjTwoCover} className="projtwo-cover-img" alt="Logo" />
            <div>
              <h5 className="proj-cover-titleone">Project .02</h5>
              <h4 className="proj-cover-titletwo">Memory Collection App</h4>
              <p className="proj-cover-titlethree">Figma | React Native | UX Design | Coding</p>
              <Link to="/project/2" className="proj-cover-titlefour">VIEW PROJECT + </Link>
            </div>
        </div>

        <div ref={projthreeIntro} className="projthree-wrapper-grid" data-aos="fade-in">
          <div className="one-three">
            <div>
              <h5 className="proj-cover-titleone">Project .03</h5>
              <h4 className="proj-cover-titletwo">Pet Adoption Website</h4>
              <p className="proj-cover-titlethree">Figma | UX Design</p>
              <Link to="/project/3" className="proj-cover-titlefour">VIEW PROJECT + </Link>
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
              <Link to="/project/3" className="proj-cover-titlefour">VIEW PROJECT + </Link>
            </div>
        </div>

        <div ref={projfiveIntro} className="projfive-wrapper-grid" data-aos="fade-in">
          <div className="two">
            <img src={ProjFiveCover} className="projfive-cover-img" alt="Logo" />
          </div>
          <div className="one-three">
            <div>
              <h5 className="proj-cover-titleone">Project .04</h5>
              <h4 className="proj-cover-titletwo">Bakery Shopping Website</h4>
              <p className="proj-cover-titlethree">Figma | React JS | UX Design | Coding</p>
              <Link to="/project/4" className="proj-cover-titlefour">VIEW PROJECT + </Link>
            </div>
          </div>
        </div>

        <div className="projfive-phone-wrapper-grid">
            <img src={ProjFiveCover} className="projfive-cover-img" alt="Logo" />
            <div>
              <h5 className="proj-cover-titleone">Project .04</h5>
              <h4 className="proj-cover-titletwo">Bakery Shopping Website</h4>
              <p className="proj-cover-titlethree">Figma | React Native | UX Design | Coding</p>
              <Link to="/project/4" className="proj-cover-titlefour">VIEW PROJECT + </Link>
            </div>
        </div>

        <ul className="footer">
          <li className="footer-link">© 2022 Jing Wen Ng </li>
          <a href="https://www.linkedin.com/in/jing-wen-n-2a1442128/" target="_blank" className="footer-link-two">LinkedIn</a>
          <ButtonMailTo mailto="mailto:jingwen9@gmail.com" />
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
}

export default Home;