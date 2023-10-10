import React from "react";
import { useState } from "react";

import "../App.scss";
import next from "../images/next.svg";
import previous from "../images/previous.svg";
import Projets from "../components/Projets";

import {
  Projet1,
  Projet2,
  Projet3,
  Projet4,
  Projet5,
} from "../utils/ProjetData";

function Portfolio() {
  const projectList = [Projet1, Projet2, Projet3, Projet4, Projet5];
  let [projetNum, setProjetNum] = useState(0);

  const handleClick = (value: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (value === "prev") {
      setProjetNum((old) => {
        return old === 0 ? projectList.length - 1 : old - 1;
      });
    }
    if (value === "next") {
      setProjetNum((old) => {
        return old === projectList.length - 1 ? 0 : old + 1;
      });
    }
  };

  return (
    <div className="portfolio">
      <div className="nextButton">
        <img
          onClick={(e) => handleClick("prev", e)}
          src={previous}
          alt="Next button"
        />
      </div>
      <Projets {...projectList[projetNum]} />
      <div className="nextButton">
        <img
          onClick={(e) => handleClick("next", e)}
          src={next}
          alt="previous button"
        />
      </div>
    </div>
  );
}

export default Portfolio;
