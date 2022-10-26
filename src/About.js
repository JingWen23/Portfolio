
import React, {useEffect, useState, useRef} from 'react';
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import HomeIntro from "./asset/HomeIntro.png";
import AboutIntro from "./asset/AboutIntro.png";
import Logo from "./asset/Logo.png";
import ButtonMailTo from "./component/ButtonMailTo";
import AboutPS from "./asset/AboutPS.png";
import AboutXD from "./asset/AboutXD.png";
import AboutFigma from "./asset/AboutFigma.png";
import { Link, NavLink } from "react-router-dom";
import NavMenu from "./component/NavMenu";
import "./App.css";

function About() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };

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

        <div class="about-wrapper">
            <section class="about-one">
                <div class="about-content">
                  <p className="about-titleone">"Tiny Details Matter"</p>
                  <p className="about-titletwo">I believe that the finer details within a product design is what makes it great. These tiny details are what create an entirely different and immersive experience for users. I aim to design and create impactful products that raises awareness on subjects we often neglect.</p>
                  <img src={AboutIntro} className="about-intro-img" alt="Logo" />
                </div>
            </section>

            <section class="about-two">
                <div class="about-content">
                  <h5 className="about-title-edu">Education</h5>
                  <h5 className="about-title-degree">Bachelor of Information Technology</h5>
                  <p className="about-title-degreename">Web and App Development</p>
                  <p className="about-title-uni">Macquarie University (2019.02 - 2022.06)</p>
                </div>
                <div class="about-content">
                  <h5 className="about-title-edu">Certificate</h5>
                  <h5 className="about-title-degree">Google UX Design</h5>
                  <p className="about-title-uni">Coursera (2022.03 - 2022.08)</p>
                </div>
            </section>

            <section class="about-three">
              <table class="u-full-width">
                <thead>
                  <tr>
                    <th>
                      <h5 className="about-title-edu">Work Experience</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h5 className="about-title-degree">App Developer Intern</h5>
                      <p className="about-title-degreename">Leanmote</p>
                      <p className="about-title-uni">2021.07 - Present</p>
                    </td>
                    <td>
                      <h5 className="about-title-degree">Freelance Designer</h5>
                      <p className="about-title-degreename">Personal</p>
                      <p className="about-title-uni">2022.07 - Present</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="about-title-degree">Small Business Manager</h5>
                      <p className="about-title-degreename">Online Business (Shopee)</p>
                      <p className="about-title-uni">2022.03 - Present</p>
                    </td>
                    <td>
                      <h5 className="about-title-degree">Accountant Assistant</h5>
                      <p className="about-title-degreename">Private Company, Australia</p>
                      <p className="about-title-uni">2017.01 - 2017.12</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section class="about-four">
              <table class="u-full-width">
                <thead>
                  <tr>
                    <th>
                      <h5 className="about-title-edu">Software Skills</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={AboutXD} className="about-software-img" alt="Logo" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={AboutPS} className="about-software-img" alt="Logo" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={AboutFigma} className="about-software-img" alt="Logo" />
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="gap">
                <tbody>
                </tbody>
              </table>
              

              <table class="u-full-width">
                <thead>
                  <tr>
                    <th>
                      <h5 className="about-title-edu">Soft Skills</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="about-skills">Communication, Teamwork, Adaptability, Creativity, Active Listening</p>
                    </td>
                  </tr>
                </tbody>

                <thead>
                  <tr>
                    <th>
                      <h5 className="about-title-edu">Hard Skills</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="about-skills">UX Design, UX Research, React Native, React JS, HTML & CSS</p>
                    </td>
                  </tr>
                </tbody>
              </table>

            </section>

            <div className="about-phone-wrapper-grid">
                  <p className="about-titleone">"Tiny Details Matter"</p>
                  <p className="about-titletwo">I believe that the finer details within a product design is what makes it great. These tiny details are what create an entirely different and immersive experience for users. I aim to design and create impactful products that raises awareness on subjects we often neglect.</p>
                  <img src={AboutIntro} className="about-intro-img" alt="Logo" />
            </div>

            <div className="education-phone-wrapper-grid">
              <h5 className="about-title-edu">Education</h5>
                <h5 className="about-title-degree">Bachelor of Information Technology</h5>
                <p className="about-title-degreename">Web and App Development</p>
                <p className="about-title-uni">Macquarie University (2019.02 - 2022.06)</p>
            </div>

            <div className="education-phone-wrapper-grid">
              <h5 className="about-title-edu">Certificate</h5>
              <h5 className="about-title-degree">Google UX Design</h5>
              <p className="about-title-uni">Coursera (2022.03 - 2022.08)</p>
            </div>

            <div className="education-phone-wrapper-grid">
              <h5 className="about-title-edu">Experience</h5>
              <h5 className="about-title-degree">App Developer Intern</h5>
              <p className="about-title-degreename">Leanmote</p>
              <p className="about-title-uni">2021.07 - Present</p>
              
              <h5 className="about-title-degree">Small Business Manager</h5>
              <p className="about-title-degreename">Online Business (Shopee)</p>
              <p className="about-title-uni">2022.03 - Present</p>

              <h5 className="about-title-degree">Freelance Designer</h5>
              <p className="about-title-uni">2022.07 - Present</p>
            </div>

            <div className="education-phone-wrapper-grid">
              <h5 className="about-title-edu">Software Skills</h5>
              <p className="about-title-degreename">Adobe XD, Adobe Photoshop, Figma,  Visual Studio Code</p>
            </div>

            <div className="education-phone-wrapper-grid">
              <h5 className="about-title-edu">Soft Skills</h5>
              <p className="about-title-degreename">Communication, Teamwork, Adaptability, Active Listening</p>
            </div>

            <div className="education-phone-wrapper-grid">
              <h5 className="about-title-edu">Hard Skills</h5>
              <p className="about-title-degreename">UX Design, UX Research, React Native, React JS, HTML & CSS</p>
            </div>


            <div className="about-footer">
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

export default About;