import { Link } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Logo from "./asset/Logo.png";
import ButtonMailTo from "./component/ButtonMailTo";
import ProjThreePaperWireframe from "./asset/ProjThreePaperWireframe.png";
import ProjThreeIntro from "./asset/ProjThreeIntro.mp4";
import ProjThreeDigitalWireframe from "./asset/ProjThreeDigitalWireframe.jpg"
import ProjThreeDigitalWireframeSmall from "./asset/ProjThreeDigitalWireframeSmall.jpg"
import ProjThreePersona from "./asset/ProjThreePersona.png"
import ProjThreeSitemap from "./asset/ProjThreeSitemap.jpeg"
import ProjThreeHome from "./asset/ProjThreeHome.jpg";
import ProjThreePetSelection from "./asset/ProjThreePetSelection.jpg";
import ProjThreeTimeSelection from "./asset/ProjThreeTimeSelection.jpg";
import ProjThreeConfirmation from "./asset/ProjThreeConfirmation.jpg";
import ProjThreeMockupsSmall from "./asset/ProjThreeMockupsSmall.jpg";
import FontSize from "./asset/FontSize.png";
import Contrast from "./asset/Contrast.png";
import NavMenu from "./component/NavMenu";
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

function ProjectThree() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const projIntro = useRef(null);
    const projOverview = useRef(null);
    const projUser = useRef(null);
    const projDesign = useRef(null);
    const projStudy = useRef(null);
    const projRefining = useRef(null);
    const projConclusion = useRef(null);

    const scrollToSection = (elementRef) => {
            window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
            });
        };

    return (
    <div>

        <NavMenu /> 

        <div className="proj-content-area">

            <div ref={projIntro} className="proj-title-container">
                <h5 className="proj-title">Project .03</h5>
                <h5 className="proj-subtitle">Pet Adoption Website</h5>
                <p className="proj-duration">May 2022 - June 2022 (1 month)</p>

                <div className="projthree-video-container">
                    <video className="proj-one-video" loop autoPlay>
                        <source
                        src={ProjThreeIntro}
                        type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
            </div>

            <div ref={projOverview} className="proj-section-container" data-aos="fade-in">
                <h2 className="proj-section-title">Project Overview</h2>

                <div className="projone-section-one">
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">The Problem</h5>
                        <p className="proj-section-content">The adoption service is currently offered through social media and information can get messy when a lot of people are enquiring. The entire system <span className="proj-section-content-bold">highly rely </span> on <span className="proj-section-content-bold">people working </span>physically in the center .</p>
                    </div>
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">Target Audience</h5>
                        <p className="proj-section-content">Adults seeking to  <span className="proj-section-content-bold">adopt a pet companion</span> through an animal shelter. </p>
                    </div>
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">The Goal</h5>
                        <p className="proj-section-content">Design a website where people can <span className="proj-section-content-bold">easily </span> view the pets for adoption and proceed to make an appointment automatically <span className="proj-section-content-bold">without having to wait</span> to verbally make one.</p>
                    </div>
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">My Role</h5>
                        <p className="proj-section-content">UX designer / researcher designing the app and responsive website from conception to delivery.</p>
                    </div>
                </div>
            </div>

            <div ref={projUser} className="proj-section-container" data-aos="fade-in">
                <h2 className="proj-section-title">Understanding the User</h2>

                <div className="projone-section-two">
                    <div>
                        <p className="proj-section-content">User interviews were conducted to understand the target users and their requirements. Interviewed participants reported that they are indeed interested in adopting animals from the animal shelter. However, the </p>

                        <p className="proj-section-two-quote">“confusing procedure that is not clearly listed”</p>

                        <p className="proj-section-content-two">and the <span className="proj-section-content-bold">adoption list</span> that is <span className="proj-section-content-bold">unorganized</span> frustrates them, which results in user feeling exhausted when they try to adopt a pet. </p>
                    
                        <a href={ProjThreePersona} target="_blank" className="proj-link-button">Click here to view the persona created +</a>
                    </div>
                </div>
            </div>

            <div ref={projDesign} className="proj-section-container" data-aos="fade-in">
                <h2 className="proj-section-title">Starting the Design</h2>

                <div className="projone-section-three">
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">Sitemap</h5>
                        <p className="proj-section-content">A sitemap was created based on the pain points identified. The information architecture of the website is structured in a way where information are segregated into further sections / pages is a reasonable way to prevent overwhelming information. </p>
                        <a href={ProjThreeSitemap} target="_blank" className="proj-link-button">Click here to view the sitemap +</a>
                    </div>
                    <div className="projthree-section-three-container">
                        <h5 className="proj-section-subtitle">Paper Wireframes</h5>
                        <p className="proj-section-content">Paper wireframes were sketched for each screen of the website. Different designs were constructed to explore the possibilities. </p>
                        <img src={ProjThreePaperWireframe} className="projone-prototype-img" alt="Logo" />
                    </div>
                    <div className="projthree-section-three-container">
                        <h5 className="proj-section-subtitle">Digital Wireframes</h5>
                        <p className="proj-section-content">The first set of wireframes contains screens on the user flow of making an appointment to adopt a pet.</p>
                        <img src={ProjThreeDigitalWireframe} className="projone-prototype-img" alt="Logo" />

                        <p className="proj-section-content">Different size variations were also drawn to accomodate users needs on different devices.</p>
                        <img src={ProjThreeDigitalWireframeSmall} className="projone-prototype-img" alt="Logo" />
                    </div>
                    <div>
                        <h5 className="proj-section-subtitle">Low-Fidelity Prototype</h5>
                        <p className="proj-section-content">To prepare for usability testing, a low-fidelity prototype presenting the flow of making an appointment to adopt a pet is created. </p>
                        <a href="https://xd.adobe.com/view/0dbea972-b6f8-4291-afaa-95b53b0641c7-58ed/" target="_blank" className="proj-link-button">CLICK HERE TO VIEW THE LO-FI PROTOTYPE +</a>
                    </div>
                </div>
            </div>

            <div ref={projStudy} className="proj-section-container" data-aos="fade-in">
                <h2 className="proj-section-title">Usability Study</h2>

                <div className="projone-section-three">
                    <div>
                        <h5 className="proj-section-subtitle">Research Goal</h5>
                        <p className="proj-section-content">To identify the difficulties users experience when attempting to make an adoption appointment.  </p>
                    </div>
                </div>

                <div className="projone-section-three">
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">Methodology</h5>

                        <table class="u-full-width">
                            <tbody>
                                <tr>
                                    <td className="proj-section-table-title">Study type:</td>
                                    <td className="proj-section-table-content">Unmoderated</td>
                                </tr>
                                <tr>
                                    <td className="proj-section-table-title">Location:</td>
                                    <td className="proj-section-table-content">Malaysia and Australia, remote</td>
                                </tr>
                                <tr>
                                    <td className="proj-section-table-title">Date:</td>
                                    <td className="proj-section-table-content">Sessions will take place between May 2 to May 7</td>
                                </tr>
                                <tr>
                                    <td className="proj-section-table-title">Details:</td>
                                    <td className="proj-section-table-content">5 participants will make an adoption appointment. They will then be requested to complete the questionnaire on the satisfaction rate. </td>
                                </tr>
                                <tr>
                                    <td className="proj-section-table-title">Duration:</td>
                                    <td className="proj-section-table-content">20-30 minutes</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="projone-methodology-phone">
                            <div className="methodology-partone">
                                <p className="proj-section-table-title">Study type:</p>
                                <p className="proj-section-table-content">Unmoderated</p>
                            </div>
                            <div className="methodology-partone">
                                <p className="proj-section-table-title">Location:</p>
                                <p className="proj-section-table-content">Malaysia and Australia, remote</p>
                            </div>
                            <div className="methodology-partone">
                                <p className="proj-section-table-title">Date:</p>
                                <p className="proj-section-table-content">Sessions will take place between May 2 to May 7</p>
                            </div>
                            <div className="methodology-partone">
                                <p className="proj-section-table-title">Details:</p>
                                <p className="proj-section-table-content">5 participants will make an adoption appointment. They will then be requested to complete the questionnaire on the satisfaction rate. </p>
                            </div>
                            <div className="methodology-partone">
                                <p className="proj-section-table-title">Duration:</p>
                                <p className="proj-section-table-content">20-30 minutes</p>
                            </div>
                    </div>

                        <h5 className="proj-section-findings-title">Main Findings</h5>
                        <div className="projthree-section-findings">
                            
                            <div>
                                <h5 className="proj-section-findings-subtitle">1</h5>
                                <p className="proj-section-findings-content-one">Review Details</p>
                                <p className="proj-section-findings-content-two">Users prefer to review the details of their appointment before confirming it. </p>
                            </div>
                            <div>
                                <h5 className="proj-section-findings-subtitle">2</h5>
                                <p className="proj-section-findings-content-one">Wish List</p>
                                <p className="proj-section-findings-content-two">Users seek for a button where they can click to save the pet under their list while browsing through the other ones.</p>
                            </div>
                        </div>

                    </div>

                    
                </div>

                
            </div>

            <div ref={projRefining} className="proj-section-container">
                <h2 className="proj-section-title">Refining the Designs</h2>
                <h5 className="proj-section-five-subtitle">Mockups</h5>

                    <div>
                        <div className="projthree-section-five">
                            <img src={ProjThreeHome} className="projthree-screens-img" alt="Logo" />
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Home Screen</p>
                                    <p className="proj-section-content">The first screen directs user attention to the adoption service as it is the main purpose of this site.</p>
                                </div>
                            </div>
                        </div>
                        <div className="projthree-section-five-phone">
                            <img src={ProjThreePetSelection} className="projthree-screens-img" alt="Logo" />
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Pet Selection Screen</p>
                                    <p className="proj-section-content">Users are presented with different photos of pets for adoption, along with their breeds and names.</p>
                                </div>
                            </div>
                        </div>
                        <div className="projthree-section-five-right">
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Pet Selection Screen</p>
                                    <p className="proj-section-content">Users are presented with different photos of pets for adoption, along with their breeds and names.</p>
                                </div>
                            </div>
                            <img src={ProjThreePetSelection} className="projthree-screens-img" alt="Logo" />
                        </div>
                        <div className="projthree-section-five">
                            <img src={ProjThreeTimeSelection} className="projthree-screens-img" alt="Logo" />
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Appointment Selction Screen</p>
                                    <p className="proj-section-content">The vacant appointment slot are displayed using a darker colour to indicate that they are selectable.</p>
                                </div>
                            </div>
                        </div>
                        <div className="projthree-section-five-right-final">
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Confirmation Screen</p>
                                    <p className="proj-section-content">The screen provides the details of the appointment before user proceeds to complete their appointment.</p>
                                </div>
                            </div>
                            <img src={ProjThreeConfirmation} className="projthree-screens-img" alt="Logo" />
                        </div>
                        <div className="projthree-section-five-phone">
                            <img src={ProjThreeConfirmation} className="projthree-screens-img" alt="Logo" />
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Confirmation Screen</p>
                                    <p className="proj-section-content">The screen provides the details of the appointment before user proceeds to complete their appointment.</p>
                                </div>
                            </div>
                        </div>

                        <div className="projthree-link-button-container">
                        <a href={ProjThreeMockupsSmall} target="_blank" className="projthree-section-five-link-button">CLICK HERE TO VIEW MOCKUP SCREENS CREATED FOR SMALLER SCREEN SIZE +</a>
                        </div>

                <div className="projone-section-three">
                    <div>
                        <h5 className="proj-section-subtitle">High-Fidelity Prototype</h5>
                        <p className="proj-section-content">A hi-fi prototype was constructed based on the digital wireframe, along with additional screens that adopt the improvements suggested during the usability sutudy</p>
                        <a href="https://xd.adobe.com/view/6a398449-870b-415b-afd0-78dfec0faa9a-3f6a/" target="_blank" className="proj-link-button">Click here to view the complete hi-fi prototype +</a>
                    </div>
                </div>

                <div className="projthree-section-accessibility">
                <h5 className="proj-section-findings-title">Main Findings</h5>
                        <div className="projthree-section-accessiblity-content">
                            
                            <div className="projone-subsection">
                                <img src={FontSize} className="projthree-accessibility-img" alt="Logo" />
                                <p className="proj-section-findings-content-one">Font Size</p>
                                <p className="proj-section-findings-content-two">Different font sizes were used to direct users’ attention to important information.</p>
                            </div>
                            <div className="projone-subsection">
                                <img src={Contrast} className="projthree-accessibility-img" alt="Logo" />
                                <p className="proj-section-findings-content-one">Color Contrast</p>
                                <p className="proj-section-findings-content-two">High colour contrast applied to elements that require users’ attention. </p>
                            </div>
                        </div>
                </div>
            </div>
            </div>

            <div ref={projConclusion} className="proj-section-container">
                <h2 className="proj-section-title">Conclusion</h2>

                <div className="projone-section-three">
                    <div>
                        <h5 className="proj-section-subtitle">Lesson Learned</h5>
                        <p className="proj-section-content">While designing the website, I’ve learned the challenges that one can encounter when designing a responsive website as many adjustments have to be made in order to fit all essential elements into small screen sizes. </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer">
          <div className="footer-list">
            <a href="https://drive.google.com/file/d/1NTr7ehUjws0L0CQPSluDE_OXJKPVT4LF/view?usp=sharing">
              <div className="footer-behance"/>
            </a>
          </div>
          <div className="footer-list">
            <div className="footer-linkedin"/>
          </div>
          <div className="footer-list">
            <div className="footer-email" />
          </div>
        </div>  

        </div>

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

export default ProjectThree;