import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import NavMenu from "./component/NavMenu";
import { Link, NavLink } from "react-router-dom";
import ProjOneIntro from "./asset/ProjOneIntro.mp4";
import ProjOnePersona from "./asset/ProjOnePersona.png";
import ProjOneScreen1 from "./asset/ProjOneScreen1.jpg";
import ProjOneScreen2 from "./asset/ProjOneScreen2.png";
import ProjOneScreen3 from "./asset/ProjOneScreen3.png";
import ProjOneScreen4 from "./asset/ProjOneScreen4.png";
import ProjOneScreen5 from "./asset/ProjOneScreen5.png";
import ProjOneFindings1 from "./asset/ProjOneFindings1.png";
import ProjOneFindings2 from "./asset/ProjOneFindings2.png";
import ProjOneFindings3 from "./asset/ProjOneFindings3.png";
import ProjOnePrototype from "./asset/ProjOnePrototype.png";
import ProjOneResponsive from "./asset/ProjOneResponsive.png";
import ProjOneSitemap from "./asset/ProjOneSitemap.jpeg";

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

function ProjectOne() {
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
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

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

        <div className="proj-video-container">
            <div className="proj-sub-video-container">
                <video className="proj-one-video" loop autoPlay>
                    <source
                        src={ProjOneIntro}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="proj-video-content">
                    <div className="proj-category">
                        <p className="proj-category-name">Individual Project</p>
                    </div>
                    <h5 className="proj-subtitle">Medicine Reminder App and Responsive Website</h5>
                    <p className="proj-duration">July 2022 - August 2022 (1 month)</p>
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
                    className={`header_link ${visibleSection === "Overview" ? "selected" : ""}`}
                    onClick={() => {
                        scrollTo(overviewRef.current);
                    }}
                    >
                    Overview
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "User" ? "selected" : ""}`}
                    onClick={() => {
                        scrollTo(userRef.current);
                    }}
                    >
                    User
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "DesignFirst" ? "selected" : ""}`}
                    onClick={() => {
                        scrollTo(designfirstRef.current);
                    }}
                    >
                    Starting the Design
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "UsabilityStudy" ? "selected" : ""}`}
                    onClick={() => {
                        scrollTo(usabilitystudyRef.current);
                    }}
                    >
                    Usability Study
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "DesignRefine" ? "selected" : ""}`}
                    onClick={() => {
                        scrollTo(designrefineRef.current);
                    }}
                    >
                    Design Refine
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "ResponsiveDesign" ? "selected" : ""}`}
                    onClick={() => {
                        scrollTo(responsivedesignRef.current);
                    }}
                    >
                    Responsive Design
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "Conclusion" ? "selected" : ""}`}
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
                    <div className="proj-section-container">
                        <p className="proj-section-name">Project Overview</p>
                    </div>
                    <h5 className="proj-section-subtitle">The Problem</h5>
                    <p className="proj-section-content">
                        Large amount of the population <span className="proj-section-content-bold">have trouble adhering to their medication schedule </span>
                        and this can often lead to not only serious health consequences, but also waste of medicines. 
                    </p>
                    <div className="projone-subsection">
                        <div>
                            <h5 className="proj-section-subtitle">The Goal</h5>
                            <p className="proj-section-content">Design an app that <span className="proj-section-content-bold">reminds people to take their medicine</span> and help them follow their assigned medication schedule. </p>
                        </div>
                        <div>
            
                            <h5 className="proj-section-subtitle">My Role</h5>
                            <p className="proj-section-content">UX designer / researcher designing the app and responsive website from conception to delivery.</p>
                        </div>
                    </div>
                </div>

                <div className="section" id="user" ref={userRef}>
                    <div className="proj-section-container">
                        <p className="proj-section-name">Understanding the User</p>
                    </div>
                    <p className="proj-section-content">Interviews were held and empathy maps were created to understand the target users and what they seek for within this app. Many participants interviewed reported that them forgetting to take medicine.</p>
                    <p className="proj-section-quote">“is something that happens on a weekly basis”</p>
                    <p className="proj-section-content-two">and they would love to see an app that could help them keep track of their medication schedule. The main user group identified was busy adults who can be forgetful and tend to skip their medications.</p>
                    <a href={ProjOnePersona} target="_blank" className="proj-link-button">Click here to view the personas created +</a>
                </div>



                <div className="section" id="designfirst" ref={designfirstRef}>
                    <div className="proj-section-container">
                        <p className="proj-section-name">Starting the Design</p>
                    </div>
                    
                    <h5 className="proj-section-subtitle">Digital Wireframes</h5>
                    <p className="proj-section-content">The first set of wireframes focuses on the screens users would encounter when adding a new medicine reminder.</p>
                    <img src={ProjOneScreen1} className="projone-screen-one-img" alt="Logo" />
       
                    <div className="proj-section-spacing">
                        <h5 className="proj-section-subtitle">Low Fidelity Prototype</h5>
                        <p className="proj-section-content">To prepare for usability testing, a low-fidelity prototype that displays the user flow of adding a medicine is created.</p>
                        <a href="https://www.figma.com/proto/4n0Vlmply8Lwk7AsQSUGRd/Google-UX-2?page-id=70%3A1354&node-id=70%3A1466&viewport=370%2C521%2C0.22&scaling=scale-down&starting-point-node-id=70%3A1466" target="_blank" className="proj-link-button">Click here to view the complete lo-fi prototype +</a>
                        <img src={ProjOnePrototype} className="projone-prototype-img" alt="Logo" />
                    </div>

                </div>


                <div className="section" id="usabilitystudy" ref={usabilitystudyRef}>
                    <div className="proj-section-container">
                        <p className="proj-section-name">Usability Study</p>
                    </div>

                 <div>
                      <div>
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

                            <div className="proj-section-spacing">
                                <h5 className="proj-section-subtitle">Main Findings</h5>


                                <table class="u-full-width">
                                <thead>
                                    <tr>
                                        <th>
                                            <img src={ProjOneFindings1} className="projone-findings-img" alt="Logo" />
                                        </th>
                                        <td></td>
                                        <th>
                                            <img src={ProjOneFindings2} className="projone-findings-img" alt="Logo" />
                                        </th>
                                        <td></td>
                                        <th>
                                            <img src={ProjOneFindings3} className="projone-findings-img-sub" alt="Logo" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="proj-section-findings-content-one">Label icons</p>
                                            <p className="proj-section-findings-content-two">People prefer using labelled icons when navigating.</p>
                                        </td>
                                        <td></td>
                                        <td>
                                            <p className="proj-section-findings-content-one">Add medicine appearance</p>
                                            <p className="proj-section-findings-content-two">People would like to select how the medicine look like.</p>
                                        </td>
                                        <td></td>
                                        <td>
                                            <p className="proj-section-findings-content-one">Edit Reminders</p>
                                            <p className="proj-section-findings-content-two">People would like to edit the info they’ve added for their reminders.</p>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>

                                <div className="projone-methodology-phone">
                                <div className="methodology-partone">
                                    <img src={ProjOneFindings1} className="projone-findings-img" alt="Logo" />
                                    <p className="proj-section-findings-content-one">Label icons</p>
                                    <p className="proj-section-findings-content-two">People prefer using labelled icons when navigating.</p>
                                </div>
                                <div className="methodology-partone">
                                    <img src={ProjOneFindings2} className="projone-findings-img" alt="Logo" />
                                    <p className="proj-section-findings-content-one">Add medicine appearance</p>
                                    <p className="proj-section-findings-content-two">People would like to select how the medicine look like.</p>
                                </div>
                                <div className="methodology-partone">
                                    <img src={ProjOneFindings3} className="projone-findings-img-sub" alt="Logo" />
                                    <p className="proj-section-findings-content-one">Edit Reminders</p>
                                    <p className="proj-section-findings-content-two">People would like to edit the info they’ve added for their reminders.</p>
                                </div>
                            </div>
                                    
                            
                                
                            </div>

                     </div>
                 </div>
                </div>

                <div className="section" id="designrefine" ref={designrefineRef}>

                    <div className="proj-section-container">
                        <p className="proj-section-name">Refining the Designs</p>
                    </div>

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


                           <h5 className="proj-section-subtitle">High-Fidelity Prototype</h5>
                           <p className="proj-section-content">A hi-fi prototype was constructed following the same user flow as the lo-fi prototype, with some additional screens added to display extra features.</p>
                           <a href="https:  www.figma.com/proto/4n0Vlmply8Lwk7AsQSUGRd/Google-UX-2?page-id=125%3A4&node-id=144%3A409&viewport=1123%2C325%2C0.38&scaling=scale-down&starting-point-node-id=144%3A409" target="_blank" className="proj-link-button">Click here to view the complete hi-fi prototype +</a>
                
                    </div>
                </div>

                <div className="section" id="responsivedesign" ref={responsivedesignRef}>

                    <div className="proj-section-container">
                        <p className="proj-section-name">Refining the Designs</p>
                    </div>


                    <p className="proj-section-content">The app’s sitemap was used as a guideline to draw out the organizational structure of each screen’s to ensure that the design is consistent across devices.</p>
                    <a href={ProjOneSitemap} target="_blank" className="proj-link-button">Click here to view the sitemap +</a>
                    <img src={ProjOneResponsive} className="projone-screen-responsive-img" alt="Logo" />

                </div>

                <div className="section" id="conclusion" ref={conclusionRef}>

                    <div className="proj-section-container">
                        <p className="proj-section-name">Conclusion</p>
                    </div>

                    <div>
                        <h5 className="proj-section-subtitle">Lesson Learned</h5>
                        <p className="proj-section-content">During the design process, I learned that when designing an app like such, one must consider the visuals and interactions on a wider point of view  to ensure that the app is feasible for the targeted audience, and even a tiny detail can affect the entire experience of a user. </p>
                    </div>
                </div>

                <div className="projone-footer">
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
            </div>

            </div>

    </div>
  );
}

export default ProjectOne;
