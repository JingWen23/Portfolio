import { Link } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Logo from "./asset/Logo.png";
import ButtonMailTo from "./component/ButtonMailTo";
import ProjOneScreen1 from "./asset/ProjOneScreen1.jpg";
import ProjOneScreen2 from "./asset/ProjOneScreen2.png";
import ProjOneScreen3 from "./asset/ProjOneScreen3.png";
import ProjOneScreen4 from "./asset/ProjOneScreen4.png";
import ProjOneScreen5 from "./asset/ProjOneScreen5.png";
import ProjOnePersona from "./asset/ProjOnePersona.png"
import ProjOnePrototype from "./asset/ProjOnePrototype.png";
import ProjOneResponsive from "./asset/ProjOneResponsive.jpg";
import ProjOneSitemap from "./asset/ProjOneSitemap.jpeg";
import ProjOneIntro from "./asset/ProjOneIntro.mp4";
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

function ProjectOne() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const projIntro = useRef(null);
    const projOverview = useRef(null);
    const projUser = useRef(null);
    const projDesign = useRef(null);
    const projStudy = useRef(null);
    const projRefining = useRef(null);
    const projResponsive = useRef(null);
    const projConclusion = useRef(null);

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
                <li onClick={() => scrollToSection(projUser)} className="home-link">02</li>
                <li onClick={() => scrollToSection(projDesign)} className="home-link">03</li>
                <li onClick={() => scrollToSection(projStudy)} className="home-link">04</li>
                <li onClick={() => scrollToSection(projRefining)} className="home-link">05</li>
                <li onClick={() => scrollToSection(projResponsive)} className="home-link">06</li>
                <li onClick={() => scrollToSection(projConclusion)} className="home-link">07</li>
            </ul>
            </div>
        </div>

        <div className="proj-content-area">

            <div ref={projIntro} className="proj-title-container">
                <h5 className="proj-title">Project .01</h5>
                <h5 className="proj-subtitle">Medicine Reminder App and Responsive Website</h5>
                <p className="proj-duration">July 2022 - August 2022 (1 month)</p>

                <div className="proj-video-container">
                    <video className="proj-one-video" loop autoPlay>
                        <source
                        src={ProjOneIntro}
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
                        <p className="proj-section-content">Large amount of the population <span className="proj-section-content-bold">have trouble adhering to their medication schedule </span>
                        and this can often lead to not only serious health consequences, but also waste of medicines. </p>
                    </div>
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">Target Audience</h5>
                        <p className="proj-section-content">Adults and seniors who occasionally <span className="proj-section-content-bold">forget to take their medicine</span>, and would like to have a dedicated reminder that prompt them to take their medications. </p>
                    </div>
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">The Goal</h5>
                        <p className="proj-section-content">Design an app that <span className="proj-section-content-bold">reminds people to take their medicine</span> and help them follow their assigned medication schedule. </p>
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
                        <p className="proj-section-content">Interviews were held and empathy maps were created to understand the target users and what they seek for within this app. Many participants interviewed reported that them forgetting to take medicine</p>

                        <p className="proj-section-two-quote">“is something that happens on a weekly basis”</p>

                        <p className="proj-section-content-two">and they would love to see an app that could help them keep track of their medication schedule. The main user group identified was busy adults who can be forgetful and tend to skip their medications.</p>
                    
                        <a href={ProjOnePersona} target="_blank" className="proj-link-button">Click here to view the personas created +</a>
                    </div>
                </div>
            </div>

            <div ref={projDesign} className="proj-section-container" data-aos="fade-in">
                <h2 className="proj-section-title">Starting the Design</h2>

                <div className="projone-section-three">
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">Digital Wireframes</h5>
                        <p className="proj-section-content">The first set of wireframes focuses on the screens users would encounter when adding a new medicine reminder.</p>
                        <img src={ProjOneScreen1} className="projone-screen-one-img" alt="Logo" />
                    </div>
                    <div className="projone-section-three-container">
                        <h5 className="proj-section-subtitle">Low Fidelity Prototype</h5>
                        <p className="proj-section-content">To prepare for usability testing, a low-fidelity prototype that displays the user flow of adding a medicine is created.</p>
                        <a href="https://www.figma.com/proto/4n0Vlmply8Lwk7AsQSUGRd/Google-UX-2?page-id=70%3A1354&node-id=70%3A1466&viewport=370%2C521%2C0.22&scaling=scale-down&starting-point-node-id=70%3A1466" target="_blank" className="proj-link-button">Click here to view the complete lo-fi prototype +</a>
                        <img src={ProjOnePrototype} className="projone-prototype-img" alt="Logo" />

                    </div>
                </div>
            </div>

            <div ref={projStudy} className="proj-section-container" data-aos="fade-in">
                <h2 className="proj-section-title">Usability Study</h2>

                <div className="projone-section-three">
                    <div className="projone-subsection">
                        <h5 className="proj-section-subtitle">Research Goal</h5>
                        <p className="proj-section-content">To figure out what difficulties users encounter when attempting to a new medicine reminder to the app.</p>
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
                                    <td className="proj-section-table-content">Malaysia, remote (participants will go through the usability study in their own homes)</td>
                                </tr>
                                <tr>
                                    <td className="proj-section-table-title">Date:</td>
                                    <td className="proj-section-table-content">Sessions will take place between July 15 to July 20</td>
                                </tr>
                                <tr>
                                    <td className="proj-section-table-title">Details:</td>
                                    <td className="proj-section-table-content">6 participants will add a medicine reminder to the app. They will then be requested to complete the questionnaire on the satisfaction rate. </td>
                                </tr>
                                <tr>
                                    <td className="proj-section-table-title">Duration:</td>
                                    <td className="proj-section-table-content">15-20 minutes</td>
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
                                <p className="proj-section-table-content">Malaysia, remote (participants will go through the usability study in their own homes)</p>
                            </div>
                            <div className="methodology-partone">
                                <p className="proj-section-table-title">Date:</p>
                                <p className="proj-section-table-content">Sessions will take place between July 15 to July 20</p>
                            </div>
                            <div className="methodology-partone">
                                <p className="proj-section-table-title">Details:</p>
                                <p className="proj-section-table-content">6 participants will add a medicine reminder to the app. They will then be requested to complete the questionnaire on the satisfaction rate. </p>
                            </div>
                            <div className="methodology-partone">
                                <p className="proj-section-table-title">Duration:</p>
                                <p className="proj-section-table-content">15-20 minutes</p>
                            </div>

                        </div>

                        <h5 className="proj-section-findings-title">Main Findings</h5>
                        <div className="proj-section-findings">
                            
                            <div className="proj-findings-container">
                                <h5 className="proj-section-findings-subtitle">1</h5>
                                <p className="proj-section-findings-content-one">Label icons</p>
                                <p className="proj-section-findings-content-two">People prefer using labelled icons when navigating.</p>
                            </div>
                            <div className="proj-findings-container">
                                <h5 className="proj-section-findings-subtitle">2</h5>
                                <p className="proj-section-findings-content-one">Add medicine appearance</p>
                                <p className="proj-section-findings-content-two">People would like to select how the medicine look like.</p>
                            </div>
                            <div className="proj-findings-container">
                                <h5 className="proj-section-findings-subtitle">3</h5>
                                <p className="proj-section-findings-content-one">Edit Reminders</p>
                                <p className="proj-section-findings-content-two">People would like to edit the info they’ve added for their reminders.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div ref={projRefining} className="proj-section-container">
                <h2 className="proj-section-title">Refining the Designs</h2>
                <h5 className="proj-section-five-subtitle">Mockups</h5>

                    <div>
                        <div className="projone-section-five">
                            <img src={ProjOneScreen2} className="projone-screens-img" alt="Logo" />
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Home Screen</p>
                                    <p className="proj-section-content">The list of reminders for the day is displayed along with a checkbox to tick off after taking the medicine.</p>
                                </div>
                            </div>
                        </div>
                        <div className="projone-section-five-right">
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Frequency Screen</p>
                                    <p className="proj-section-content">Users can select how frequent they need to eat the medicine to set a repetitive alarm.</p>
                                </div>
                            </div>
                            <img src={ProjOneScreen3} className="projone-screens-img" alt="Logo" />
                        </div>
                        <div className="projone-section-five">
                            <img src={ProjOneScreen4} className="projone-screens-img" alt="Logo" />
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Pill Appearance</p>
                                    <p className="proj-section-content">Users can select how the pill looks like to easily recognize which medicine to take.</p>
                                </div>
                            </div>
                        </div>
                        <div className="projone-section-five-right">
                            <div className="proj-section-five-text-container">
                                <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Reminder Review</p>
                                    <p className="proj-section-content">Users can review the details of the reminder set before confirmation.</p>
                                </div>
                            </div>
                            <img src={ProjOneScreen5} className="projone-screens-img" alt="Logo" />
                        </div>

                <div className="projone-section-three">
                    <div>
                        <h5 className="proj-section-subtitle">High-Fidelity Prototype</h5>
                        <p className="proj-section-content">A hi-fi prototype was constructed following the same user flow as the lo-fi prototype, with some additional screens added to display extra features.</p>
                        <a href="https://www.figma.com/proto/4n0Vlmply8Lwk7AsQSUGRd/Google-UX-2?page-id=125%3A4&node-id=144%3A409&viewport=1123%2C325%2C0.38&scaling=scale-down&starting-point-node-id=144%3A409" target="_blank" className="proj-link-button">Click here to view the complete hi-fi prototype +</a>
                    </div>
                </div>
            </div>

            <div ref={projResponsive} className="proj-section-container" data-aos="fade-in">
                <h2 className="proj-section-title">Responsive Designs</h2>

                <div className="projone-section-three">
                    <div>
                        <p className="proj-section-content">The app’s sitemap was used as a guideline to draw out the organizational structure of each screen’s to ensure that the design is consistent across devices.</p>
                        <a href={ProjOneSitemap} target="_blank" className="proj-link-button">Click here to view the sitemap +</a>
                        <img src={ProjOneResponsive} className="projone-screen-responsive-img" alt="Logo" />
                    </div>
                </div>
            </div>
            </div>

            <div ref={projConclusion} className="proj-section-container" data-aos="fade-in">
                <h2 className="proj-section-title">Conclusion</h2>

                <div className="projone-section-three">
                    <div>
                        <h5 className="proj-section-subtitle">Lesson Learned</h5>
                        <p className="proj-section-content">During the design process, I learned that when designing an app like such, one must consider the visuals and interactions on a wider point of view  to ensure that the app is feasible for the targeted audience, and even a tiny detail can affect the entire experience of a user. </p>
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

export default ProjectOne;