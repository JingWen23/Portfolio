import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import NavMenu from "./component/NavMenu";
import { Link, NavLink } from "react-router-dom";
import ProjFourIntro from "./asset/ProjFourIntro.mp4";
import ProjFourHome from "./asset/ProjFourHome.png"
import ProjFourMenu from "./asset/ProjFourMenu.png"
import ProjFourDetail from "./asset/ProjFourDetail.jpg"
import ProjFourFAQ from "./asset/ProjFourFAQ.jpg"

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

function ProjectFour() {
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

        <div className="projfour-video-container">
            <div className="projfour-sub-video-container">
                <video className="projfour-video" loop autoPlay>
                    <source
                        src={ProjFourIntro}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="projfour-video-content">
                    <div className="projtwo-category">
                        <p className="projtwo-category-name">Group Project</p>
                    </div>
                    <h5 className="projtwo-subtitle">Bakery Shopping Website</h5>
                    <p className="projfour-duration">September 2021 - November 2021 (3 months)</p>
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
                    className={`header_link ${visibleSection === "Overview" ? "selectedfour" : ""}`}
                    onClick={() => {
                        scrollTo(overviewRef.current);
                    }}
                    >
                    Overview
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "User" ? "selectedfour" : ""}`}
                    onClick={() => {
                        scrollTo(userRef.current);
                    }}
                    >
                    Proposal
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "DesignFirst" ? "selectedfour" : ""}`}
                    onClick={() => {
                        scrollTo(designfirstRef.current);
                    }}
                    >
                    Designs
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "UsabilityStudy" ? "selectedfour" : ""}`}
                    onClick={() => {
                        scrollTo(usabilitystudyRef.current);
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
                    <div className="projfour-section-container">
                        <p className="projfour-section-name">Project Overview</p>
                    </div>
                    <div className="projone-subsection">
                        <div className="projfour-overview-spacing">
                            <h5 className="projfour-section-subtitle">The Goal</h5>
                            <p className="proj-section-content">Design and create a web application for users to <span className="proj-section-content-bold">order bakery products</span>.</p>
                        </div>
                        <div>
            
                            <h5 className="projfour-section-subtitle">The Team</h5>
                            <p className="proj-section-content">The project is carried out by a team of 4, each were distributed with a different role and some collaborated sections. </p>
                        </div>
                    </div>
                    <div className="projone-subsection">
                        <div className="projfour-overview-spacing">
                            <h5 className="projfour-section-subtitle">My Role</h5>
                            <p className="proj-section-content">UX designer designing the app from conception to delivery. Programmer in charge of coding part of the project.</p>
                        </div>
                        <div>
                            <h5 className="projfour-section-subtitle">The Tool</h5>
                            <p className="proj-section-content">The mobile app is coded using <span className="proj-section-content-bold">React JS</span>, an open-source front-end JavaScript library for building user interfaces maintained by Meta and a community of individual developers and companies.</p>
                        </div>
                    </div>
                </div>

                <div className="section" id="user" ref={userRef}>
                    <div className="projfour-section-container">
                        <p className="projfour-section-name">Project Proposal</p>
                    </div>
                    <div>
                      <p className="proj-section-content">By aligning with the assignment requirement, it was decided that the project would contain the following:</p>
                          <div>
                              <h5 className="projfour-section-proposal-subtitle">7</h5>
                              <p className="proj-section-proposal-content-one">Pages</p>
                              <p className="proj-section-proposal-content-two">Home page, Menu page, Product Detail page, Contact page, Cart page, Checkout page, FAQ page</p>
                          </div>

                          <div>
                              <h5 className="projfour-section-proposal-subtitle">9</h5>
                              <p className="proj-section-proposal-content-one">Functionalities</p>
                              <p className="proj-section-proposal-content-two">View menu, Search menu item, Add item into cart, View cart, Edit cart amount, Remove item from cart, View FAQ questions and answers, Send email for help, Login to account</p>
                          </div>
                  </div>
                </div>



                <div className="section" id="designfirst" ref={designfirstRef}>
                    <div className="projfour-section-container">
                        <p className="projfour-section-name">Project Designs</p>
                    </div>

                    <div className="projfour-section-five-phone">
                        <div className="proj-section-five-text-container phone-spacing">
                            <div className="proj-section-five-content">
                                <p className="proj-section-table-title">Home Screen</p>
                                <p className="proj-section-content">The screen presents a series of famous products from the shop to attract customers’ attention.</p>
                            </div>
                        </div>
                        <img src={ProjFourHome} className="projthree-screens-img" alt="Logo" />
                              
                    </div>

                    <div className="projfour-section-five-phone">
                        <div className="proj-section-five-text-container phone-spacing">
                            <div className="proj-section-five-content">
                                <p className="proj-section-table-title">Menu Screen</p>
                                <p className="proj-section-content">All products are displayed in a grid system, along with a search bar where users can filter specific items.</p>
                            </div>
                        </div>
                        <img src={ProjFourMenu} className="projthree-screens-img" alt="Logo" />
                    </div>

                    <div className="projfour-section-five-phone">
                        <div className="proj-section-five-text-container phone-spacing">
                                  <div className="proj-section-five-content">
                                    <p className="proj-section-table-title">Product Detail Screen</p>
                                    <p className="proj-section-content">Item description is provided with reviews from previous customers.</p>
                                  </div>
                              </div>
                        <img src={ProjFourDetail} className="projthree-screens-img" alt="Logo" /> 
                    </div>

                    <div className="projfour-section-five-phone">
                        <div className="proj-section-five-text-container phone-spacing">
                            <div className="proj-section-five-content">
                                <p className="proj-section-table-title">FAQ Screen</p>
                                <p className="proj-section-content">A series of questions with answers are displayed, accompanied by a form that sllows user to send questions to the site ownder through email.</p>
                            </div>
                        </div>
                        <img src={ProjFourFAQ} className="projthree-screens-img" alt="Logo" />
                              
                    </div>

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

                <div className="section" id="conclusion" ref={usabilitystudyRef}>

                    <div className="projfour-section-container">
                        <p className="projthree-section-name">Conclusion</p>
                    </div>

                    <h2 className="projfour-section-subtitle">Project Outcome</h2>
                      
                          <p className="proj-section-content">All functionalities proposed have been successfully implemented into the application. The complete application was built and published to heroku. </p>
                          <a href="https://limitless-bastion-36675.herokuapp.com" target="_blank" className="proj-link-button">CLICK HERE TO VIEW THE WEB APP +</a>
                      
          
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

export default ProjectFour;
