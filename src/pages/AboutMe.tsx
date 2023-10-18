import React from "react";
import "../App.scss";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="main">
        <div className="imageLink">
          <div className="image">
            <img
              className="portrait"
              src="./assets/face.jpg"
              alt="Prashanth Thiaga"
            />
          </div>
        </div>

        <div className="info">
          <p className="about">
            {" "}
            I'm a ReactJS enthusiast who loves turning ideas into interactive
            web experiences. With a passion for clean code and user-centric
            design, I'm here to make your digital visions come to life. Let's
            build something amazing together!{" "}
          </p>
          <p className="context">
            {" "}
            I'm on the lookout for exciting opportunities as a React developer.
            With a strong foundation in building dynamic web applications, I'm
            ready to contribute my skills and enthusiasm to your team. Let's
            create outstanding web experiences together.
          </p>
          <div className="stack">
            <p>FrontEnd : ReactJs Typescript</p>
            <p>BackEnd : NodeJs, Firebase</p>
            <p>Host : AWS Amplyfy, Heroku</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
