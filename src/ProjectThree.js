import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import NavMenu from "./component/NavMenu";
import { Link, NavLink } from "react-router-dom";
import ProjThreeIntro from "./asset/ProjThreeIntro.mp4";
import ProjThreePersona from "./asset/ProjThreePersona.png";

import ProjThreePaperWireframe from "./asset/ProjThreePaperWireframe.png";
import ProjThreeDigitalWireframe from "./asset/ProjThreeDigitalWireframe.jpg"
import ProjThreeDigitalWireframeSmall from "./asset/ProjThreeDigitalWireframeSmall.jpg"
import ProjThreeSitemap from "./asset/ProjThreeSitemap.jpeg"
import ProjThreeHome from "./asset/ProjThreeHome.jpg";
import ProjThreePetSelection from "./asset/ProjThreePetSelection.jpg";
import ProjThreeTimeSelection from "./asset/ProjThreeTimeSelection.jpg";
import ProjThreeConfirmation from "./asset/ProjThreeConfirmation.jpg";
import ProjThreeMockupsSmall from "./asset/ProjThreeMockupsSmall.jpg";
import ProjThreeFindings1 from "./asset/ProjThreeFindings1.png";
import ProjThreeFindings2 from "./asset/ProjThreeFindings2.png";
import FontSize from "./asset/FontSize.png";
import Contrast from "./asset/Contrast.png";

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function ProjectThree() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const overviewRef = useRef(null);
  const userRef = useRef(null);
  const designfirstRef = useRef(null);
  const usabilitystudyRef = useRef(null);
  const designrefineRef = useRef(null);
  const responsivedesignRef = useRef(null);
  const conclusionRef = useRef(null);

  const sectionRefs = [
    { section: "Overview", ref: overviewRef },
    { section: "User", ref: userRef },
    { section: "DesignFirst", ref: designfirstRef },
    { section: "UsabilityStudy", ref: usabilitystudyRef },
    { section: "DesignRefine", ref: designrefineRef },
    { section: "ResponsiveDesign", ref: responsivedesignRef },
    { section: "Conclusion", ref: conclusionRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
  
  return (
    <div>

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

        <div className="projthree-video-container">
            <div className="projthree-sub-video-container">
                <video className="projthree-video" loop autoPlay>
                    <source
                        src={ProjThreeIntro}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="projthree-video-content">
                    <div className="projtwo-category">
                        <p className="projtwo-category-name">Individual Project</p>
                    </div>
                    <h5 className="projtwo-subtitle">Pet Adoption Website</h5>
                    <p className="proj-duration">May 2022 - June 2022 (1 month)</p>
                </div>
            </div>
        </div>

        <div className="proj-one-content-area">

            <div id="container">
            <div id="sidebar">
                <div id="sidebar-content">

                <div className="header" ref={headerRef}>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "Overview" ? "selectedthree" : ""}`}
                    onClick={() => {
                        scrollTo(overviewRef.current);
                    }}
                    >
                    Overview
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "User" ? "selectedthree" : ""}`}
                    onClick={() => {
                        scrollTo(userRef.current);
                    }}
                    >
                    User
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "DesignFirst" ? "selectedthree" : ""}`}
                    onClick={() => {
                        scrollTo(designfirstRef.current);
                    }}
                    >
                    Starting the Design
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "UsabilityStudy" ? "selectedthree" : ""}`}
                    onClick={() => {
                        scrollTo(usabilitystudyRef.current);
                    }}
                    >
                    Usability Study
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "DesignRefine" ? "selectedthree" : ""}`}
                    onClick={() => {
                        scrollTo(designrefineRef.current);
                    }}
                    >
                    Design Refine
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "Conclusion" ? "selectedthree" : ""}`}
                    onClick={() => {
                        scrollTo(conclusionRef.current);
                    }}
                    >
                    Conclusion
                    </button>
                    
                </div>
            </div>
           
            </div>
            <div id="content">
                <div id="main-content">

                <div className="section" id="overview" ref={overviewRef}>
                    <div className="projthree-section-container">
                        <p className="projthree-section-name">Project Overview</p>
                    </div>
                    <h5 className="projthree-section-subtitle">The Problem</h5>
                    <p className="proj-section-content">
                        The adoption service is currently offered through social media and information can get messy when a lot of people are enquiring. The entire system <span className="proj-section-content-bold">highly rely </span> on <span className="proj-section-content-bold">people working </span>physically in the center .
                    </p>
                    <div className="projone-subsection">
                        <div>
                            <h5 className="projthree-section-subtitle">The Goal</h5>
                            <p className="proj-section-content">Design a website where people can <span className="proj-section-content-bold">easily </span> view the pets for adoption and proceed to make an appointment automatically <span className="proj-section-content-bold">without having to wait</span> to verbally make one.</p>
                        </div>
                        <div>
            
                            <h5 className="projthree-section-subtitle">My Role</h5>
                            <p className="proj-section-content">UX designer / researcher designing the app and responsive website from conception to delivery.</p>
                        </div>
                    </div>
                </div>

                <div className="section" id="user" ref={userRef}>
                    <div className="projthree-section-container">
                        <p className="projthree-section-name">Understanding the User</p>
                    </div>
                    <p className="proj-section-content">User interviews were conducted to understand the target users and their requirements. Interviewed participants reported that they are indeed interested in adopting animals from the animal shelter. However, the </p>
                    <p className="projthree-section-quote">“confusing procedure that is not clearly listed”</p>
                    <p className="proj-section-content-two">and the <span className="proj-section-content-bold">adoption list</span> that is <span className="proj-section-content-bold">unorganized</span> frustrates them, which results in user feeling exhausted when they try to adopt a pet.</p>
                    <a href={ProjThreePersona} target="_blank" className="proj-link-button">Click here to view the persona created +</a>
                </div>



                <div className="section" id="designfirst" ref={designfirstRef}>
                    <div className="projthree-section-container">
                        <p className="projthree-section-name">Starting the Design</p>
                    </div>
                    
                    <div className="projone-section-three">
                      <div className="projthree-subsection">
                          <h5 className="projthree-section-subtitle">Sitemap</h5>
                          <p className="proj-section-content">A sitemap was created based on the pain points identified. The information architecture of the website is structured in a way where information are segregated into further sections / pages is a reasonable way to prevent overwhelming information. </p>
                          <a href={ProjThreeSitemap} target="_blank" className="proj-link-button link-spacing">Click here to view the sitemap +</a>
                      </div>
                      <div className="projthree-section-three-container">
                          <h5 className="projthree-section-subtitle">Paper Wireframes</h5>
                          <p className="proj-section-content">Paper wireframes were sketched for each screen of the website. Different designs were constructed to explore the possibilities. </p>
                          <img src={ProjThreePaperWireframe} className="projone-prototype-img" alt="Logo" />
                      </div>
                      <div className="projthree-section-three-container">
                          <h5 className="projthree-section-subtitle">Digital Wireframes</h5>
                          <p className="proj-section-content">The first set of wireframes contains screens on the user flow of making an appointment to adopt a pet.</p>
                          <img src={ProjThreeDigitalWireframe} className="projone-prototype-img" alt="Logo" />

                          <p className="proj-section-content content-spacing">Different size variations were also drawn to accomodate users needs on different devices.</p>
                          <img src={ProjThreeDigitalWireframeSmall} className="projone-prototype-img" alt="Logo" />
                      </div>
                      <div>
                          <h5 className="projthree-section-subtitle content-spacing">Low-Fidelity Prototype</h5>
                          <p className="proj-section-content">To prepare for usability testing, a low-fidelity prototype presenting the flow of making an appointment to adopt a pet is created. </p>
                          <a href="https://xd.adobe.com/view/0dbea972-b6f8-4291-afaa-95b53b0641c7-58ed/" target="_blank" className="proj-link-button link-spacing">CLICK HERE TO VIEW THE LO-FI PROTOTYPE +</a>
                      </div>
                  </div>

                </div>


                <div className="section" id="usabilitystudy" ref={usabilitystudyRef}>
                    <div className="projthree-section-container">
                        <p className="projthree-section-name">Usability Study</p>
                    </div>

                    <div >
                      <div className="research-spacing">
                          <h5 className="projthree-section-subtitle">Research Goal</h5>
                          <p className="proj-section-content">To identify the difficulties users experience when attempting to make an adoption appointment.  </p>
                      </div>
                  </div>

                 <div>
                      <div>
                          <h5 className="projthree-section-subtitle">Methodology</h5>

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
                                  <p className="proj-section-table-content">5 participants will make an adoption appointment. They will then be requested to complete the questionnaire on the satisfaction rate.</p>
                              </div>
                              <div className="methodology-partone">
                                  <p className="proj-section-table-title">Duration:</p>
                                  <p className="proj-section-table-content">20-30 minutes</p>
                              </div>
                          </div>

                            <div className="proj-section-spacing">
                                <h5 className="projthree-section-subtitle">Main Findings</h5>


                                <table class="u-full-width">
                                <thead>
                                    <tr>
                                        <th>
                                            <img src={ProjThreeFindings2} className="projthree-findings-img" alt="Logo" />
                                        </th>
                                        <td></td>
                                        <th>
                                            <img src={ProjThreeFindings1} className="projthree-findings-img-sub" alt="Logo" />
                                        </th>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="proj-section-findings-content-one">Review Details</p>
                                            <p className="proj-section-findings-content-two">Users prefer to review the details of their appointment before confirming it. </p>
                                        </td>
                                        <td></td>
                                        <td>
                                            <p className="proj-section-findings-content-one">Wish List</p>
                                            <p className="proj-section-findings-content-two">Users seek for a button where they can click to save the pet under their list while browsing through the other ones.</p>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                                </table>

                                <div className="projone-methodology-phone">
                                <div className="methodology-partone">
                                    <img src={ProjThreeFindings2} className="projthree-findings-img" alt="Logo" />
                                    <p className="proj-section-findings-content-one">Review Details</p>
                                    <p className="proj-section-findings-content-two">Users prefer to review the details of their appointment before confirming it. </p>
                                </div>
                                <div className="methodology-partone">
                                    <img src={ProjThreeFindings1} className="projthree-findings-img" alt="Logo" />
                                    <p className="proj-section-findings-content-one">Wish List</p>
                                    <p className="proj-section-findings-content-two">Users seek for a button where they can click to save the pet under their list while browsing through the other ones.</p>
                                </div>
                            </div>
                                    
                            
                                
                            </div>

                     </div>
                 </div>
                </div>

                <div className="section" id="designrefine" ref={designrefineRef}>

                    <div className="projthree-section-container">
                        <p className="projthree-section-name">Refining the Designs</p>
                    </div>

                    <div>
                          <div className="projthree-section-five">
                              <img src={ProjThreeHome} className="projthree-screens-img" alt="Logo" />
                              <div className="proj-section-five-text-container">
                                  <div>
                                      <p className="proj-section-table-title">Home Screen</p>
                                      <p className="proj-section-content">The first screen directs user attention to the adoption service as it is the main purpose of this site.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="projthree-section-five-phone">
                              <img src={ProjThreePetSelection} className="projthree-screens-img" alt="Logo" />
                              <div className="proj-section-five-text-container">
                                  <div>
                                      <p className="proj-section-table-title">Pet Selection Screen</p>
                                      <p className="proj-section-content">Users are presented with different photos of pets for adoption, along with their breeds and names.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="projthree-section-five-right">
                              <div className="proj-section-five-text-container">
                                  <div>
                                      <p className="proj-section-table-title">Pet Selection Screen</p>
                                      <p className="proj-section-content">Users are presented with different photos of pets for adoption, along with their breeds and names.</p>
                                  </div>
                              </div>
                              <img src={ProjThreePetSelection} className="projthree-screens-img" alt="Logo" />
                          </div>
                          <div className="projthree-section-five">
                              <img src={ProjThreeTimeSelection} className="projthree-screens-img" alt="Logo" />
                              <div className="proj-section-five-text-container">
                                  <div>
                                      <p className="proj-section-table-title">Appointment Selction Screen</p>
                                      <p className="proj-section-content">The vacant appointment slot are displayed using a darker colour to indicate that they are selectable.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="projthree-section-five-right-final">
                              <div className="proj-section-five-text-container">
                                  <div>
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
                          <a href={ProjThreeMockupsSmall} target="_blank" className="proj-link-button ">CLICK HERE TO VIEW MOCKUP SCREENS CREATED FOR SMALLER SCREEN SIZE +</a>
                          </div>

                  <div className="projone-section-three">
                      <div>
                          <h5 className="projthree-section-subtitle">High-Fidelity Prototype</h5>
                          <p className="proj-section-content">A hi-fi prototype was constructed based on the digital wireframe, along with additional screens that adopt the improvements suggested during the usability sutudy</p>
                          <a href="https://xd.adobe.com/view/6a398449-870b-415b-afd0-78dfec0faa9a-3f6a/" target="_blank" className="proj-link-button link-spacing">Click here to view the complete hi-fi prototype +</a>
                      </div>
                  </div>

                  <div className="projthree-section-spacing">
                        <h5 className="projthree-section-subtitle">Accessibility Considerations</h5>


                                <table class="u-full-width">
                                <thead>
                                    <tr>
                                        <th>
                                            <img src={FontSize} className="projthree-accessibility-img" alt="Logo" />
                                        </th>
                                        <td></td>
                                        <th>
                                            <img src={Contrast} className="projthree-accessibility-img" alt="Logo" />
                                        </th>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="proj-section-findings-content-one">Font Size</p>
                                            <p className="proj-section-findings-content-two">Different font sizes were used to direct users’ attention to important information.</p>
                                        </td>
                                        <td></td>
                                        <td>
                                            <p className="proj-section-findings-content-one">Color Contrast</p>
                                            <p className="proj-section-findings-content-two">High colour contrast applied to elements that require users’ attention. </p>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                                </table>

                                <div className="projone-methodology-phone">
                                <div className="methodology-partone">
                                    <img src={FontSize} className="projthree-accessibility-img" alt="Logo" />
                                    <p className="proj-section-findings-content-one">Font Size</p>
                                    <p className="proj-section-findings-content-two">Different font sizes were used to direct users’ attention to important information.</p>
                                </div>
                                <div className="methodology-partone">
                                    <img src={Contrast} className="projthree-accessibility-img" alt="Logo" />
                                    <p className="proj-section-findings-content-one">Color Contrast</p>
                                    <p className="proj-section-findings-content-two">High colour contrast applied to elements that require users’ attention. </p>
                                </div>
                            </div>
                                    
                            
                                
                            </div>
                </div>

                </div>

                <div className="section" id="conclusion" ref={conclusionRef}>

                    <div className="projthree-section-container">
                        <p className="projthree-section-name">Conclusion</p>
                    </div>

                    <div>
                        <h5 className="projthree-section-subtitle">Lesson Learned</h5>
                        <p className="proj-section-content">While designing the website, I’ve learned the challenges that one can encounter when designing a responsive website as many adjustments have to be made in order to fit all essential elements into small screen sizes. </p>
                    </div>
                </div>

                <div className="projone-footer">
                    <div className="footer-list">
                        <a href="https://www.behance.net/jingwenng2" target="_blank">
                        <div className="footer-behance"/>
                        </a>
                    </div>
                    <div className="footer-list">
                        <a href="https://www.linkedin.com/in/jingwen-ng/" target="_blank">
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
            </div>

            </div>
    </div>
  );
}

export default ProjectThree;
