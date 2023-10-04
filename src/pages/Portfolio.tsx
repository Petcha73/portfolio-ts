import React from "react";
import "../App.scss";
import next from "../images/next.svg";
import previous from "../images/previous.svg";
import mac from "../images/mac.png";
import phone from "../images/phone.png";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="nextButton">
        <img src={previous} alt="Next button" />
      </div>
      <div className="main">
        <div className="info">
          <h1>Title</h1>
          <h3>Sous titre</h3>
          <p className="about">
            INFO TEXT about the gameLorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when
          </p>
          <p className="context">
            CONTEXTcreationLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text e
          </p>
          <div className="stack">
            <p>FrontEnd : Vanilla</p>
            <p>BackEnd : Vanilla</p>
            <p>Host : Cake</p>
          </div>
          <p className="year">2000</p>
        </div>
        <div className="imageLink">
          <div className="image">
            <img
              className="mobile"
              src={phone}
              alt="Mobile version of the app"
            />
            <img
              className="desktop"
              src={mac}
              alt="Desktop version of the app"
            />
          </div>

          <a className="link" href="https://google.com">
            click Here to Check the App
          </a>
        </div>
      </div>
      <div className="nextButton">
        <img src={next} alt="previous button" />
      </div>
    </div>
  );
}

export default Portfolio;
