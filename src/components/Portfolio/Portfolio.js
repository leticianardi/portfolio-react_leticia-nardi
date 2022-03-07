import React from "react";
import "./portfolio.css";
// import GithubIcon from "../../img/icon-github.svg";

function Portfolio({ img, link, github, title }) {
  return (
    <div className="p-item grow">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle-title">{title}</div>
      </div>

      <div className="p-code">
        <a href={github} target="_blank" rel="noreferrer">
          &#60;source code&#62;
        </a>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
}

export default Portfolio;
