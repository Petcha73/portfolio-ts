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

          <a
            className="link"
            href="https://www.linkedin.com/in/prashanth-thiaga-453178293/"
          >
            click Here to Check my LinkedIn page
          </a>
        </div>

        <div className="info">
          <p className="about">
            {" "}
            Développeur web passionné en reconversion depuis 2020, j'ai
            consolidé mes compétences à travers des projets de Freelance et des
            initiatives personnelles visant à mettre en pratique mes acquis.
            Autodidacte, mon parcours m'a permis d'acquérir une expérience
            significative dans la réalisation de projets web variés.
            Aujourd'hui, animé par le désir de toujours progresser.{" "}
          </p>
          <p className="context">
            {" "}
            Aujourd'hui, animé par le désir de toujours progresser, je suis
            enthousiaste à l'idée d'intégrer une entreprise dynamique où je
            pourrais continuer à élargir mes horizons.
          </p>
          <div className="stack">
            <p>FrontEnd : React Js Typescript</p>
            <p>BackEnd : Node Js</p>
            <p>Host : AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
