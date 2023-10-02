import React from "react";
import "../App.scss";
import next from "../images/next.svg";
import previous from "../images/previous.svg";
function Portfolio() {
  return (
    <div className="portfolio">
      <div className="nextButton">
        <img src={previous} alt="Next button" />
      </div>
      <div className="main">
        <div className="info">
          <h1>Title</h1>
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
        <div className="imageLink">dsfqqsdf</div>
      </div>
      <div className="nextButton">
        <img src={next} alt="previous button" />
      </div>
    </div>
  );
}

export default Portfolio;
