import { Link } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Logo from "./asset/Logo.png";
import ButtonMailTo from "./component/ButtonMailTo";
import ProjFourIntro from "./asset/ProjFourIntro.jpg"
import ProjFourHome from "./asset/ProjFourHome.png"
import ProjFourMenu from "./asset/ProjFourMenu.png"
import ProjFourDetail from "./asset/ProjFourDetail.jpg"
import ProjFourFAQ from "./asset/ProjFourFAQ.jpg"


import NavMenu from "./NavMenu";
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

function ProjectFour() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const projIntro = useRef(null);
    const projOverview = useRef(null);
    const projProposal = useRef(null);
    const projDesign = useRef(null);
    const projOutcome = useRef(null);

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
                <li onClick={() => scrollToSection(projIntro)} className="home-link">00</li>
                <li onClick={() => scrollToSection(projOverview)} className="home-link">01</li>
                <li onClick={() => scrollToSection(projProposal)} className="home-link">02</li>
                <li onClick={() => scrollToSection(projDesign)} className="home-link">03</li>
                <li onClick={() => scrollToSection(projOutcome)} className="home-link">04</li>
                {/* <li onClick={() => scrollToSection(projfiveIntro)} className="home-link">05</li> */}
            </ul>
            </div>
        </div>

        <div className="proj-content-area">

            <div ref={projIntro} className="proj-title-container">
                <h5 className="proj-title">Project .04 (GROUP PROJECT)</h5>
                <h5 className="proj-subtitle">Bakery Shopping Website</h5>
                <p className="proj-duration">September 2021 - November 2021 (3 months)</p>

                <div className="projfour-intro-container">
                <img src={ProjFourIntro} className="projone-screens-img" alt="Logo" />
            </div>

            <div ref={projOverview} className="proj-section-container" data-aos="fade-in">
                <h2 className="proj-section-title">Project Overview</h2>

                <div className="projone-section-one">
                    <div className="projone-subsection">
                    <h5 className="proj-section-subtitle">The Goal</h5>
                        <p className="proj-section-content">Design and create a web application for users to <span className="proj-section-content-bold">order bakery products</span>.</p>
                    </div>
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">The Team</h5>
                        <p className="proj-section-content">The project is carried out by a team of 4, each were distributed with a different role and some collaborated sections. </p>
                    </div>
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">The Tool</h5>
                        <p className="proj-section-content">The mobile app is coded using <span className="proj-section-content-bold">React JS</span>, an open-source front-end JavaScript library for building user interfaces maintained by Meta and a community of individual developers and companies.</p>
                    </div>
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">My Role</h5>
                        <p className="proj-section-content">UX designer designing the app from conception to delivery. Programmer in charge of coding part of the project.</p>
                    </div>
                    
                </div>
            </div>

            <div ref={projProposal} className="proj-section-container" data-aos="fade-in">
                <h2 className="proj-section-title">Project Proposal</h2>

                <div className="projtwo-section-container">
                    <p className="proj-section-content">By aligning with the assignment requirement, it was decided that the project would contain the following:</p>

                        <div className="projone-subsection">
                            <h5 className="projfour-section-proposal-subtitle">7</h5>
                            <p className="proj-section-proposal-content-one">Pages</p>
                            <p className="proj-section-proposal-content-two">Home page, Menu page, Product Detail page, Contact page, Cart page, Checkout page, FAQ page</p>
                        </div>

                        <div className="projone-subsection">
                            <h5 className="projfour-section-proposal-subtitle">9</h5>
                            <p className="proj-section-proposal-content-one">Functionalities</p>
                            <p className="proj-section-proposal-content-two">View menu, Search menu item, Add item into cart, View cart, Edit cart amount, Remove item from cart, View FAQ questions and answers, Send email for help, Login to account</p>
                        </div>
                </div>
            </div>

            <div ref={projDesign} className="proj-section-container" >
                <h2 className="proj-section-title">Project Designs</h2>

                <div>
                        <div className="projfour-section-design">
                            <img src={ProjFourHome} className="projfour-screens-img" alt="Logo" />
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Home Screen</p>
                                    <p className="proj-section-content">The screen presents a series of famous products from the shop to attract customers’ attention.</p>
                                </div>
                            </div>
                        </div>
                        <div className="projfour-design-section-two">
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Menu Screen</p>
                                    <p className="proj-section-content">All products are displayed in a grid system, along with a search bar where users can filter specific items.</p>
                                </div>
                            </div>
                            <img src={ProjFourMenu} className="projthree-screens-img" alt="Logo" />
                        </div>
                        <div className="projfour-design-section-three">
                            <img src={ProjFourDetail} className="projthree-screens-img" alt="Logo" />
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Product Detail Screen</p>
                                    <p className="proj-section-content">Item description is provided with reviews from previous customers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="projfour-design-section-four">
                            
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">FAQ Screen</p>
                                    <p className="proj-section-content">A series of questions with answers are displayed, accompanied by a form that sllows user to send questions to the site ownder through email.</p>
                                </div>
                            </div>
                            <img src={ProjFourFAQ} className="projthree-screens-img" alt="Logo" />
                        </div>

                </div>

            <div ref={projOutcome} className="proj-section-container" data-aos="fade-in">
                <h2 className="proj-section-title">Project Outcome</h2>

                <div className="projone-section-three">
                    <div>
                        <p className="proj-section-content">All functionalities proposed have been successfully implemented into the application. The complete application was built and published to heroku. </p>
                        <a href="https://limitless-bastion-36675.herokuapp.com" target="_blank" className="proj-link-button">CLICK HERE TO VIEW THE WEB APP +</a>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <ul className="projects-footer">
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
//   return (
//     <div>
//       <h1>This is the home page</h1>
//       <Link to="about">Click to view our about page</Link>
//       <Link to="contact">Click to view our contact page</Link>
//     </div>
//   );
}

export default ProjectFour;