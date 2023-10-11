import React, { memo } from "react";

interface Projet {
  title: string;
  subTitle: string;
  about: string;
  context: string;
  front: string;
  back: string;
  host: string;
  year: string;
  macUrl: string;
  phoneUrl: string;
  link: string;
}

function Projets({
  title,
  subTitle,
  about,
  context,
  front,
  back,
  host,
  year,
  macUrl,
  phoneUrl,
  link,
}: Projet) {
  return (
    <div className="main">
      <div className="info">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
        <p className="about">{about}</p>
        <p className="context">{context}</p>
        <div className="stack">
          <p>FrontEnd : {front}</p>
          <p>BackEnd : {back}</p>
          <p>Host : {host}</p>
        </div>
        <p className="year">{year}</p>
      </div>
      <div className="imageLink">
        <div className="image">
          <img
            className="mobile"
            src={phoneUrl}
            alt="Mobile version of the app"
          />
          <img
            className="desktop"
            src={macUrl}
            alt="Desktop version of the app"
          />
        </div>

        <a className="link" href={link} target="_blank" rel="noreferrer">
          click Here to Check the App
        </a>
      </div>
    </div>
  );
}

export default memo(Projets);
