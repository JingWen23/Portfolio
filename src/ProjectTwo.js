// import { Link } from "react-router-dom";
// import React, {useEffect, useState, useRef} from 'react';
// import { render } from "react-dom";
// import Popup from "reactjs-popup";
// import BurgerIcon from "./BurgerIcon";
// import Logo from "./asset/Logo.png";
// import ButtonMailTo from "./component/ButtonMailTo";
// import ProjTwoMain from "./asset/ProjTwoMain.jpg";
// import ProjTwoStoryboard from "./asset/ProjTwoStoryboard.jpeg";
// import ProjTwoWireframe1 from "./asset/ProjTwoWireframe1.jpg";
// import ProjTwoWireframe2 from "./asset/ProjTwoWireframe2.jpg";
// import ProjTwoProfile from "./asset/ProjTwoProfile.png";
// import ProjTwoLogin from "./asset/ProjTwoLogin.png";
// import ProjTwoSplash from "./asset/ProjTwoSplash.png";
// import ProjTwoHome from "./asset/ProjTwoHome.png";
// import ProjTwoAlbum from "./asset/ProjTwoAlbum.png";
// import ProjTwoAdd from "./asset/ProjTwoAdd.png";
// import ProjTwoDetail from "./asset/ProjTwoDetail.png";
// import NavMenu from "./component/NavMenu";
// import "./App.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init({
//     // Global settings:
//     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//     startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//     initClassName: 'aos-init', // class applied after initialization
//     animatedClassName: 'aos-animate', // class applied on animation
//     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
//     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//     offset: 120, // offset (in px) from the original trigger point
//     delay: 0, // values from 0 to 3000, with step 50ms
//     duration: 400, // values from 0 to 3000, with step 50ms
//     easing: 'ease', // default easing for AOS animations
//     once: false, // whether animation should happen only once - while scrolling down
//     mirror: false, // whether elements should animate out while scrolling past them
//     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
//   });


// const contentStyle = {
//       background: "rgba(255,255,255,0",
//       width: "80%",
//       border: "none"
//     };

// function ProjectTwo() {

//     useEffect(() => {
//         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
//       }, []);

//     const projIntro = useRef(null);
//     const projOverview = useRef(null);
//     const projOutline = useRef(null);
//     const projDesign = useRef(null);
//     const projRefining = useRef(null);
//     const projFunctionalities = useRef(null);
//     const projOutcome = useRef(null);

//     const scrollToSection = (elementRef) => {
//             window.scrollTo({
//             top: elementRef.current.offsetTop,
//             behavior: "smooth",
//             });
//         };

//     return (
//     <div>

//         <NavMenu /> 

//         <div className="proj-content-area">

//             <div ref={projIntro} className="proj-title-container">
//                 <h5 className="proj-title">Project .02</h5>
//                 <h5 className="proj-subtitle">Memory Collection App</h5>
//                 <p className="proj-duration">March 2022 - May 2022 (2 months)</p>

//                 <div className="projtwo-intro-container">
//                 <img src={ProjTwoMain} className="projone-screens-img" alt="Logo" />
//             </div>

//             <div ref={projOverview} className="proj-section-container" data-aos="fade-in">
//                 <h2 className="proj-section-title">Project Overview</h2>

//                 <div className="projone-section-one">
//                     <div className="projone-subsection">
//                         <h5 className="proj-section-subtitle">The Goal</h5>
//                         <p className="proj-section-content">Design and create a mobile app for <span className="proj-section-content-bold">users to record their memories</span>. Through the app, users should be able to view, add and delete their memories.</p>
//                     </div>
//                     <div className="projone-subsection">
//                         <h5 className="proj-section-subtitle">My Role</h5>
//                         <p className="proj-section-content">UX designer designing the app from conception to delivery. Programmer coding the app functionalities.</p>
//                     </div>
//                 </div>

//                 <div className="projtwo-section-one-single">
//                     <h5 className="proj-section-subtitle">The Tool</h5>
//                     <p className="proj-section-content">The mobile app is coded using <span className="proj-section-content-bold">React Native</span>, an open-source UI software framework created by Meta Platforms, Inc.</p>
//                 </div>
//             </div>

//             <div ref={projOutline} className="proj-section-container" data-aos="fade-in">
//                 <h2 className="proj-section-title">Project Outline</h2>

//                 <div className="projtwo-section-container">
//                     <p className="proj-section-content">A storyboard was drawn to indicate the relationship and interactions between each screens. </p>

//                     <img src={ProjTwoStoryboard} className="projtwo-storyboard-img" alt="Logo" />
//                 </div>
//             </div>

//             <div ref={projDesign} className="proj-section-container" data-aos="fade-in">
//                 <h2 className="proj-section-title">Starting the Design</h2>

//                 <div className="projtwo-section-three">
//                     <div>
//                         <h5 className="proj-section-subtitle">Digital Wireframes</h5>
//                         <p className="proj-section-content">The first set of wireframes constructed focuses on the main functionalities of the app.</p>
//                     </div>
//                     <div>
//                         <img src={ProjTwoWireframe1} className="projtwo-wireframe-img" alt="Logo" />
//                     </div>
//                 </div>

//                 <div className="projtwo-section-three-two">
//                     <div>
//                         <img src={ProjTwoWireframe2} className="projtwo-wireframe-img" alt="Logo" />
//                     </div>
//                     <div>
//                         <p className="proj-section-content">Additional screens were later on added to create the entire flow a user would experience when utilising the app.</p>
//                     </div>
//                 </div>
//             </div>

//             <div ref={projRefining} className="proj-section-container" >
//                 <h2 className="proj-section-title">Refining the Designs</h2>
//                 <h5 className="proj-section-five-subtitle">Mockups</h5>

//                 <div className="projtwo-section-four-flex-container" data-aos="fade-in">
//                     <div class="projtwo-flex-subcontainer">
//                         <div className="flex-component">
//                             <img src={ProjTwoLogin} className="projtwo-login-img" alt="Logo" />
//                         </div>
//                         <div className="flex-component">
//                             <img src={ProjTwoProfile} className="projtwo-login-img" alt="Logo" />
//                         </div>
//                     </div>
//                     <div class="projtwo-flex-subcontainer">
//                         <div className="flex-component">
//                             <div className="projtwo-section-four-text-container">
//                                 <div className="projtwo-section-four-content">
//                                     <p className="proj-section-table-title">Login Screen</p>
//                                     <p className="proj-section-content">Users can login to their account using the provided usernames and passwords.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex-component">
//                             <img src={ProjTwoSplash} className="projtwo-splash-img" alt="Logo" />
//                         </div>
//                         <div className="flex-component">
//                             <div className="projtwo-section-four-text-container">
//                                 <div className="projtwo-section-four-content">
//                                     <p className="proj-section-table-title">Home Screen</p>
//                                     <p className="proj-section-content">User’s profile is displayed along with the total memories they’ve added into the app.</p>
//                                 </div>
//                             </div>
//                         </div>  
//                     </div>
//                 </div>

//                 <div className="projtwo-section-fourtwo-flex-container" data-aos="fade-in">
//                     <div class="projtwo-flex-subcontainer">
//                         <div className="flex-component">
//                             <div className="projtwo-section-four-text-container">
//                                 <div className="projtwo-section-four-content">
//                                     <p className="proj-section-table-title">Collection Screen</p>
//                                     <p className="proj-section-content">A list of predefined-albums are presented to users, which allows them to categorize their memories.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex-component">
//                             <img src={ProjTwoHome} className="projtwo-login-img" alt="Logo" />
//                         </div>
//                     </div>
//                     <div class="projtwo-flex-subcontainer">
                        
//                         <div className="flex-component">
//                             <img src={ProjTwoAlbum} className="projtwo-splash-img" alt="Logo" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="projtwo-section-fourthree-flex-container" data-aos="fade-in">
//                     <div class="projtwo-flex-subcontainer">
//                         <div className="flex-component">
//                             <img src={ProjTwoDetail} className="projtwo-login-img" alt="Logo" />
//                         </div>
//                     </div>
//                     <div class="projtwo-flex-subcontainer">
//                         <div className="flex-component">
//                             <img src={ProjTwoAdd} className="projtwo-splash-img" alt="Logo" />
//                         </div>
//                         <div className="flex-component">
//                             <div className="projtwo-section-four-text-container">
//                                 <div className="projtwo-section-four-content">
//                                     <p className="proj-section-table-title">Add Memory Screen</p>
//                                     <p className="proj-section-content">Users are prompted to complete the listed fields when adding a new entry, and the details will be presented as shown.</p>
//                                 </div>
//                             </div>
//                         </div>  
//                     </div>
//                 </div>

//                 <div ref={projFunctionalities} className="proj-section-container" data-aos="fade-in">
//                 <h2 className="proj-section-title">App Functionalities</h2>
//                 <p className="projtwo-section-five-content">Actual functionalities have been coded into the mobile app, which includes</p>
                

//                 <div className="projtwo-section-five">
//                     <div className="proj-findings-container">
//                         <h5 className="proj-section-findings-subtitle">1</h5>
//                         <p className="proj-section-findings-content-one">Accounts</p>
//                         <p className="proj-section-findings-content-two">Users can view different memories when signed in with different accounts.</p>
//                     </div>
//                     <div className="proj-findings-container">
//                         <h5 className="proj-section-findings-subtitle">2</h5>
//                         <p className="proj-section-findings-content-one">Add Memory</p>
//                         <p className="proj-section-findings-content-two">Users can add a new memory into the list.</p>
//                     </div>
//                     <div className="proj-findings-container">
//                         <h5 className="proj-section-findings-subtitle">3</h5>
//                         <p className="proj-section-findings-content-one">Delete Memory</p>
//                         <p className="proj-section-findings-content-two">Users can remove a memory entry from the list.</p>
//                     </div>
//                     <div className="proj-findings-container">
//                         <h5 className="proj-section-findings-subtitle">4</h5>
//                         <p className="proj-section-findings-content-one">View Memory Details</p>
//                         <p className="proj-section-findings-content-two">Users can view the detail descriptions of each memory.</p>
//                     </div>
//                     <div className="proj-findings-container">
//                         <h5 className="proj-section-findings-subtitle">5</h5>
//                         <p className="proj-section-findings-content-one">View Profile</p>
//                         <p className="proj-section-findings-content-two">Users can view their profile information.</p>
//                     </div>
//                     <div className="proj-findings-container"> 
//                         <h5 className="proj-section-findings-subtitle">6</h5>
//                         <p className="proj-section-findings-content-one">View Total Entries</p>
//                         <p className="proj-section-findings-content-two">Users can check how many current entries they have.</p>
//                     </div>
//                 </div>

//             </div>

//             <div ref={projOutcome} className="proj-section-container">
//                 <h2 className="proj-section-title">Project Outcome</h2>

//                 <div className="projone-section-three">
//                     <div>
//                         <p className="proj-section-content">The mobile app was constructed successfully and published to Expo. The application is viewable through the Expo Go app.</p>
//                         <a href="https://expo.dev/@jingwen_23/MajorDeliverable" target="_blank" className="proj-link-button">Click here to view the mobile app +</a>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>

//         <div className="footer">
//           <div className="footer-list">
//             <a href="https://drive.google.com/file/d/1NTr7ehUjws0L0CQPSluDE_OXJKPVT4LF/view?usp=sharing">
//               <div className="footer-behance"/>
//             </a>
//           </div>
//           <div className="footer-list">
//             <div className="footer-linkedin"/>
//           </div>
//           <div className="footer-list">
//             <div className="footer-email" />
//           </div>
//         </div>  


//         </div>

//       </div>
//     )
// }

// export default ProjectTwo;

import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import NavMenu from "./component/NavMenu";
import { Link, NavLink } from "react-router-dom";
import ProjTwoIntro from "./asset/ProjTwoIntro.mp4";
import ProjTwoStoryboard from "./asset/ProjTwoStoryboard.jpeg";
import ProjTwoWireframe1 from "./asset/ProjTwoWireframe1.jpg";
import ProjTwoWireframe2 from "./asset/ProjTwoWireframe2.jpg";
import ProjTwoProfile from "./asset/ProjTwoProfile.png";
import ProjTwoLogin from "./asset/ProjTwoLogin.png";
import ProjTwoSplash from "./asset/ProjTwoSplash.png";
import ProjTwoHome from "./asset/ProjTwoHome.png";
import ProjTwoAlbum from "./asset/ProjTwoAlbum.png";
import ProjTwoAdd from "./asset/ProjTwoAdd.png";
import ProjTwoDetail from "./asset/ProjTwoDetail.png";

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
        
        <NavMenu/>  

        <div className="projtwo-video-container">
            <div className="proj-sub-video-container">
                <video className="projtwo-video" loop autoPlay>
                    <source
                        src={ProjTwoIntro}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="projtwo-video-content">
                    <div className="projtwo-category">
                        <p className="projtwo-category-name">Individual Project</p>
                    </div>
                    <h5 className="projtwo-subtitle">Memory Collection App</h5>
                    <p className="proj-duration">March 2022 - May 2022 (2 months)</p>
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
                    className={`header_link ${visibleSection === "Overview" ? "selectedtwo" : ""}`}
                    onClick={() => {
                        scrollTo(overviewRef.current);
                    }}
                    >
                    Overview
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "User" ? "selectedtwo" : ""}`}
                    onClick={() => {
                        scrollTo(userRef.current);
                    }}
                    >
                    Outline
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "DesignFirst" ? "selectedtwo" : ""}`}
                    onClick={() => {
                        scrollTo(designfirstRef.current);
                    }}
                    >
                    Starting Design
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "UsabilityStudy" ? "selectedtwo" : ""}`}
                    onClick={() => {
                        scrollTo(usabilitystudyRef.current);
                    }}
                    >
                    Design Refine
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "DesignRefine" ? "selectedtwo" : ""}`}
                    onClick={() => {
                        scrollTo(designrefineRef.current);
                    }}
                    >
                    Functionalities
                    </button>
                    <button
                    type="button"
                    className={`header_link ${visibleSection === "ResponsiveDesign" ? "selectedtwo" : ""}`}
                    onClick={() => {
                        scrollTo(responsivedesignRef.current);
                    }}
                    >
                    Outcome
                    </button>
                    
                </div>
            </div>
           
            </div>
            <div id="content">
                <div id="main-content">

                <div className="section" id="overview" ref={overviewRef}>
                    <div className="projtwo-section-container">
                        <p className="projtwo-section-name">Project Overview</p>
                    </div>
                    <div className="projtwo-subsection">
                        <div>
                            <h5 className="projtwo-section-subtitle">The Goal</h5>
                            <p className="proj-section-content">Design an app that <span className="proj-section-content-bold">reminds people to take their medicine</span> and help them follow their assigned medication schedule. </p>
                        </div>
                        <div>
            
                            <h5 className="projtwo-section-subtitle">My Role</h5>
                            <p className="proj-section-content">UX designer designing the app from conception to delivery. Programmer coding the app functionalities.</p>
                        </div>
                    </div>
                    <h5 className="projtwo-section-subtitle">The Tool</h5>
                    <p className="proj-section-content">The mobile app is coded using <span className="proj-section-content-bold">React Native</span>, an open-source UI software framework created by Meta Platforms, Inc.</p>                    
                </div>

                <div className="section" id="user" ref={userRef}>
                    <div className="projtwo-section-container">
                        <p className="projtwo-section-name">Project Outline</p>
                    </div>
                    <p className="proj-section-content">A storyboard was drawn to indicate the relationship and interactions between each screens.</p>
                    <img src={ProjTwoStoryboard} className="projtwo-storyboard-img" alt="Logo" />
                </div>



                <div className="section" id="designfirst" ref={designfirstRef}>
                    <div className="projtwo-section-container">
                        <p className="projtwo-section-name">Starting the Design</p>
                    </div>

                   <div className="projtwo-section-three">
                       <div>
                           <h5 className="projtwo-section-subtitle">Digital Wireframes</h5>
                           <p className="proj-section-content">The first set of wireframes constructed focuses on the main functionalities of the app.</p>
                       </div>
                       <div>
                           <img src={ProjTwoWireframe1} className="projtwo-wireframe-img" alt="Logo" />
                       </div>
                   </div>

                   <div className="projtwo-section-three-two">
                       <div>
                           <img src={ProjTwoWireframe2} className="projtwo-wireframe-img" alt="Logo" />
                       </div>
                       <div>
                           <p className="proj-section-content">Additional screens were later on added to create the entire flow a user would experience when utilising the app.</p>
                       </div>
                   </div>

                   <div className="projtwo-section-three-phone">
                       <div>
                           <h5 className="projtwo-section-subtitle">Digital Wireframes</h5>
                           <p className="proj-section-content">The first set of wireframes constructed focuses on the main functionalities of the app.</p>
                       </div>
                       <div>
                           <img src={ProjTwoWireframe1} className="projtwo-wireframe-img" alt="Logo" />
                       </div>

                       <div>
                        <p className="proj-section-content">Additional screens were later on added to create the entire flow a user would experience when utilising the app.</p>
                           <img src={ProjTwoWireframe2} className="projtwo-wireframe-img" alt="Logo" />
                       </div>
                   </div>
                </div>


                <div className="section" id="usabilitystudy" ref={usabilitystudyRef}>
                    <div className="projtwo-section-container">
                        <p className="projtwo-section-name">Refining the Designs</p>
                    </div>

                    <div className="projtwo-section-four-flex-container" data-aos="fade-in">
                      <div class="projtwo-flex-subcontainer">
                          <div className="flex-component">
                              <img src={ProjTwoLogin} className="projtwo-login-img" alt="Logo" />
                          </div>
                          <div className="flex-component">
                              <img src={ProjTwoProfile} className="projtwo-login-img" alt="Logo" />
                          </div>
                      </div>
                      <div class="projtwo-flex-subcontainer">
                          <div className="flex-component">
                              <div className="projtwo-section-four-text-container">
                                  <div className="projtwo-section-four-content">
                                      <p className="proj-section-table-title">Login Screen</p>
                                      <p className="proj-section-content">Users can login to their account using the provided usernames and passwords.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="flex-component">
                              <img src={ProjTwoSplash} className="projtwo-splash-img" alt="Logo" />
                          </div>
                          <div className="flex-component">
                              <div className="projtwo-section-four-text-container">
                                  <div className="projtwo-section-four-content">
                                      <p className="proj-section-table-title">Home Screen</p>
                                      <p className="proj-section-content">User’s profile is displayed along with the total memories they’ve added into the app.</p>
                                  </div>
                              </div>
                          </div>  
                      </div>
                  </div>

                  <div className="projtwo-section-fourtwo-flex-container" data-aos="fade-in">
                      <div class="projtwo-flex-subcontainer">
                          <div className="flex-component">
                              <div className="projtwo-section-four-text-container">
                                  <div className="projtwo-section-four-content">
                                      <p className="proj-section-table-title">Collection Screen</p>
                                      <p className="proj-section-content">A list of predefined-albums are presented to users, which allows them to categorize their memories.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="flex-component">
                              <img src={ProjTwoHome} className="projtwo-login-img" alt="Logo" />
                          </div>
                      </div>
                      <div class="projtwo-flex-subcontainer">
                        
                          <div className="flex-component">
                              <img src={ProjTwoAlbum} className="projtwo-splash-img" alt="Logo" />
                          </div>
                      </div>
                  </div>

                  <div className="projtwo-section-fourthree-flex-container" data-aos="fade-in">
                      <div class="projtwo-flex-subcontainer">
                          <div className="flex-component">
                              <img src={ProjTwoDetail} className="projtwo-login-img" alt="Logo" />
                          </div>
                      </div>
                      <div class="projtwo-flex-subcontainer">
                          <div className="flex-component">
                              <img src={ProjTwoAdd} className="projtwo-splash-img" alt="Logo" />
                          </div>
                          <div className="flex-component">
                              <div className="projtwo-section-four-text-container">
                                  <div className="projtwo-section-four-content">
                                      <p className="proj-section-table-title">Add Memory Screen</p>
                                      <p className="proj-section-content">Users are prompted to complete the listed fields when adding a new entry, and the details will be presented as shown.</p>
                                  </div>
                              </div>
                          </div>  
                      </div>
                  </div>


                </div>

                <div className="section" id="designrefine" ref={designrefineRef}>

                    <div className="projtwo-section-container">
                        <p className="projtwo-section-name">App Functionalities</p>
                    </div>

                    <p className="projtwo-section-five-content">Actual functionalities have been coded into the mobile app, which includes</p>
                
                   <div className="projtwo-section-five">
                       <div className="proj-findings-container">
                           <h5 className="projtwo-section-findings-subtitle">1</h5>
                           <p className="proj-section-findings-content-one">Accounts</p>
                           <p className="proj-section-findings-content-two">Users can view different memories when signed in with different accounts.</p>
                       </div>
                       <div className="proj-findings-container">
                           <h5 className="projtwo-section-findings-subtitle">2</h5>
                           <p className="proj-section-findings-content-one">Add Memory</p>
                           <p className="proj-section-findings-content-two">Users can add a new memory into the list.</p>
                       </div>
                       <div className="proj-findings-container">
                           <h5 className="projtwo-section-findings-subtitle">3</h5>
                           <p className="proj-section-findings-content-one">Delete Memory</p>
                           <p className="proj-section-findings-content-two">Users can remove a memory entry from the list.</p>
                       </div>
                       <div className="proj-findings-container">
                           <h5 className="projtwo-section-findings-subtitle">4</h5>
                           <p className="proj-section-findings-content-one">View Memory Details</p>
                           <p className="proj-section-findings-content-two">Users can view the detail descriptions of each memory.</p>
                       </div>
                       <div className="proj-findings-container">
                           <h5 className="projtwo-section-findings-subtitle">5</h5>
                           <p className="proj-section-findings-content-one">View Profile</p>
                           <p className="proj-section-findings-content-two">Users can view their profile information.</p>
                       </div>
                       <div className="proj-findings-container"> 
                           <h5 className="projtwo-section-findings-subtitle">6</h5>
                           <p className="proj-section-findings-content-one">View Total Entries</p>
                           <p className="proj-section-findings-content-two">Users can check how many current entries they have.</p>
                       </div>
                   </div>


                </div>

                <div className="section" id="responsivedesign" ref={responsivedesignRef}>

                    <div className="projtwo-section-container">
                        <p className="projtwo-section-name">Project Outcome</p>
                    </div>


                    <div className="projone-section-three">
                       <div>
                           <p className="proj-section-content">The mobile app was constructed successfully and published to Expo. The application is viewable through the Expo Go app.</p>
                           <a href="https://expo.dev/@jingwen_23/MajorDeliverable" target="_blank" className="proj-link-button">Click here to view the mobile app +</a>
                       </div>
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
