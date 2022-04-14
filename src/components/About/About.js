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
            Hi There ! I am a 22 years old passionate programmer ! 
            I've got 3 years experience working as a Electronics and Communication Engineer,
            and 1 year working remotely with a UK based company as a Full-Stack Developer.
            I am a passionate about coding and full stack development. Certified Angular, React.js, Python and Django Developer. 
            Curious lifelong learner that loves the work and has an appetite for challenging problems.
            <br></br>
            In my free time, I love to play Chess and learn new technologies !
            <br></br>
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
              href="https://drive.google.com/drive/u/0/my-drive?msclkid=8e1043dfbbd711ecb73546705800be38"
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
