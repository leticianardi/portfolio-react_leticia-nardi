import React from "react";
import "./aboutme.css";
import Turtle from "../../img/pexels-alex-azabache-3264721.jpg";

const Aboutme = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Turtle}
            alt="Turtle swimming in the ocean"
            className="a-img"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">A little bit about me</p>
        <p className="a-description">
          Occaecat sit pariatur officia ex amet adipisicing. Qui esse laborum
          aute sunt tempor tempor incididunt enim et. Tempor ipsum esse magna
          reprehenderit culpa aliquip non excepteur. Culpa aliquip officia ad
          occaecat esse nostrud sunt ut aliqua elit. Aute magna ea cillum
          deserunt dolore fugiat ut deserunt labore adipisicing deserunt.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
