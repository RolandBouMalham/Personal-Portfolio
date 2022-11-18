import React from "react";
import "./About.css";
import ProfilePic from "../../images/ProfilePic.jpeg";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div id="aboutId" className="about">
      <div className="about__left">
        <img className="about__image" src={ProfilePic} alt="profile" />
      </div>

      <div className="about__content">
        <div className="about__paragraph">
          <h1>About Me</h1>
          <p>
            Hi There ! I am a Certified IBM DevOps and Software Engineer. 
            I've got 1 year of experience working remotely with a US company as a Frontend Web Developer,
            and 1 year of experience working remotely with a UK company as a Full-Stack Web Developer, 
            and 3 years experience working as a Electronics and Communication Engineer.
            I am a passionate about coding and full stack development. Certified and experienced Angular, React.js, Python and Django Developer. 
            Curious lifelong learner that loves the work and has an appetite for challenging problems.
          </p>
        </div>

        <div className="about__lower">
          <div className="about__details">
            <h1>Contact Details</h1>

            <p>Roland Bou-Malham</p>
            <p>Chiah, Beirut</p>
            <p>+961 71 950 114</p>
            <p>boumalhamroland@gmail.com</p>
          </div>

          <div className="about__resume">
            <a
              href="https://drive.google.com/file/d/1OVeTeZpfCAJmVzDfzy0GUMAcwXQVuesM/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="about__button">
                <FaDownload /> Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
