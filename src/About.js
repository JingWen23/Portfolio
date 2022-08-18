import { Link } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import HomeIntro from "./asset/HomeIntro.png";
import AboutIntro from "./asset/AboutIntro.jpg";
import Logo from "./asset/Logo.png";
// import ProjOneCover from "./asset/ProjOneCover.jpg";
// import ProjTwoCover from "./asset/ProjTwoCover.png";
// import ProjThreeCover from "./asset/ProjThreeCover.jpg";
// import ProjFourCover from "./asset/ProjFourCover.jpg";
// import ProjFiveCover from "./asset/ProjFiveCover.jpg";
import NavMenu from "./NavMenu";
import "./App.css";


const contentStyle = {
      background: "rgba(255,255,255,0",
      width: "80%",
      border: "none"
    };

function About() {

  const homeIntro = useRef(null);
  const projoneIntro = useRef(null);
  const projtwoIntro = useRef(null);
  const projthreeIntro = useRef(null);
  const projfourIntro = useRef(null);
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
            {/* <ul>
                <li onClick={() => scrollToSection(homeIntro)} className="home-link">00</li>
                <li onClick={() => scrollToSection(projoneIntro)} className="home-link">01</li>
                <li onClick={() => scrollToSection(projtwoIntro)} className="home-link">02</li>
                <li onClick={() => scrollToSection(projthreeIntro)} className="home-link">03</li>
                <li onClick={() => scrollToSection(projfourIntro)} className="home-link">04</li>
                <li onClick={() => scrollToSection(projfiveIntro)} className="home-link">05</li>
            </ul> */}
            </div>
        </div>

        <div className="content-area">

        <div className="intro-wrapper-grid">
          <div className="one">
            <img src={AboutIntro} className="about-intro-img" alt="Logo" />
          </div>
          <div className="two">
            <p className="about-titleone">"Tiny Details Matter"</p>
            <h5 className="about-titletwo">Hello, I'm</h5>
            <h5 className="about-titlethree">Jing Wen</h5>
            <p className="about-titlefour">I believe that the finer details within a product design is what makes it great. These tiny details are what create an entirely different and immersive experience for users. I aim to design and create impactful products that raises awareness on subjects we often neglect.</p>
          </div>
        </div>

        <div className="education-wrapper-grid">
          <div>
            <h5 className="about-title-edu">Education</h5>
          </div>
          <div className="about-two">
            <div className="about-two-content">
                <h5 className="about-title-degree">Bachelor of Information Technology</h5>
                <p className="about-title-degreename">Web and App Development</p>
                <p className="about-title-uni">Macquarie University (2019.02 - 2022.06)</p>
            </div>
          </div>
        </div>

        <div className="education-phone-wrapper-grid">
          <h5 className="about-title-edu">Education</h5>
            <h5 className="about-title-degree">Bachelor of Information Technology</h5>
            <p className="about-title-degreename">Web and App Development</p>
            <p className="about-title-uni">Macquarie University (2019.02 - 2022.06)</p>
        </div>

        <div className="education-wrapper-grid">
          <div>
            <h5 className="about-title-edu">Certificate</h5>
          </div>
          <div className="about-two">
            <div className="about-two-content">
                <h5 className="about-title-degree">Google UX Design</h5>
                <p className="about-title-uni">Coursera (2022.03 - 2022.08)</p>
            </div>
          </div>
        </div>

        <div className="education-phone-wrapper-grid">
          <h5 className="about-title-edu">Certificate</h5>
          <h5 className="about-title-degree">Google UX Design</h5>
          <p className="about-title-uni">Coursera (2022.03 - 2022.08)</p>
        </div>

        <div className="education-wrapper-grid">
          <div>
            <h5 className="about-title-edu">Experience</h5>
          </div>
          <div className="about-two">
            <div className="about-experience-content">
                <h5 className="about-title-degree">App Developer Intern</h5>
                <p className="about-title-degreename">Leanmote</p>
                <p className="about-title-uni">2021.07 - Present</p>
            </div>
            <div className="about-experience-content">
                <h5 className="about-title-degree">Small Business Manager / CEO 😶</h5>
                <p className="about-title-degreename">Online Business (Shopee)</p>
                <p className="about-title-uni">2022.03 - Present</p>
            </div>
            <div className="about-experience-content-final">
                <h5 className="about-title-degree">Freelance Designer</h5>
                <p className="about-title-uni">2022.07 - Present</p>
            </div>
          </div>
        </div>

        <div className="education-phone-wrapper-grid">
          <h5 className="about-title-edu">Experience</h5>
          <h5 className="about-title-degree">App Developer Intern</h5>
          <p className="about-title-degreename">Leanmote</p>
          <p className="about-title-uni">2021.07 - Present</p>
          
          <h5 className="about-title-degree">Small Business Manager / CEO 😶</h5>
          <p className="about-title-degreename">Online Business (Shopee)</p>
          <p className="about-title-uni">2022.03 - Present</p>

          <h5 className="about-title-degree">Freelance Designer</h5>
          <p className="about-title-uni">2022.07 - Present</p>
        </div>

        <div className="education-wrapper-grid">
          <div>
            <h5 className="about-title-edu">Software Skills</h5>
          </div>
          <div className="about-two-software">
            <div className="about-software-content">
                <p className="about-title-degreename">Adobe XD, Adobe Photoshop, Figma,  Visual Studio Code</p>
            </div>
          </div>
        </div>

        <div className="education-phone-wrapper-grid">
          <h5 className="about-title-edu">Software Skills</h5>
          <p className="about-title-degreename">Adobe XD, Adobe Photoshop, Figma,  Visual Studio Code</p>
        </div>

        <div className="education-wrapper-grid">
          <div>
            <h5 className="about-title-edu">Soft Skills</h5>
          </div>
          <div className="about-two-software">
            <div className="about-software-content">
                <p className="about-title-degreename">Communication, Teamwork, Adaptability, Active Listening</p>
            </div>
          </div>
        </div>

        <div className="education-phone-wrapper-grid">
          <h5 className="about-title-edu">Soft Skills</h5>
          <p className="about-title-degreename">Communication, Teamwork, Adaptability, Active Listening</p>
        </div>

        <div className="education-wrapper-grid">
          <div>
            <h5 className="about-title-edu">Hard Skills</h5>
          </div>
          <div className="about-two-software">
            <div className="about-software-content">
                <p className="about-title-degreename">UX Design, UX Research, React Native, React JS, HTML & CSS</p>
            </div>
          </div>
        </div>

        <div className="education-phone-wrapper-grid">
          <h5 className="about-title-edu">Hard Skills</h5>
          <p className="about-title-degreename">UX Design, UX Research, React Native, React JS, HTML & CSS</p>
        </div>

        <div className="education-wrapper-grid">
          <div>
            <h5 className="about-title-edu">In Learning</h5>
          </div>
          <div className="about-two">
            <div className="about-two-content">
                <h5 className="about-title-degree">Digital Illustration</h5>
                <p className="about-title-degreename">Procreate</p>
                <p className="about-title-uni">2022.08 - Present</p>
            </div>
          </div>
        </div>

        <div className="education-phone-wrapper-grid">
          <h5 className="about-title-edu">In Learning</h5>
            <h5 className="about-title-degree">Digital Illustration</h5>
            <p className="about-title-degreename">Procreate</p>
            <p className="about-title-uni">2022.08 - Present</p>
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

export default About;