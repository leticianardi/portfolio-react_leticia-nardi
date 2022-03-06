import React from "react";
import "./aboutme.css";
// import Turtle from "../../img/turtle.jpg";
import Bootstrap from "../../img/skill-bootstrap.svg";
import Css from "../../img/skill-css.svg";
import Graphql from "../../img/skill-graphql.png";
import Html from "../../img/skill-html.svg";
import Js from "../../img/skill-js.png";
import MySql from "../../img/skill-mysql.png";
import Node from "../../img/skill-node.svg";
import ReactLogo from "../../img/skill-react.svg";

const Aboutme = () => {
  return (
    <div className="about">
      {/* <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Turtle}
            alt="Turtle swimming in the ocean"
            className="a-img"
          />
        </div>
      </div> */}
{/* TODO: make it dynamic */}
      <div className="a-left">
        <div className="skill-1">
          <div className="a-skills">
            <img src={Html} alt="HTML" className="a-skill-img" />
            <div className="skill-text">
              {/* <h4 className="a-skill-title">HTML</h4> */}
            </div>
          </div>

          <div className="a-skills">
            <img src={Css} alt="CSS" className="a-skill-img" />
            <div className="skill-text">
              {/* <h4 className="a-skill-title">CSS</h4> */}
            </div>
          </div>

          <div className="a-skills">
            <img src={Js} alt="JavaScript" className="a-skill-img" />
            <div className="skill-text">
              {/* <h4 className="a-skill-title">JavaScript</h4> */}
            </div>
          </div>

          <div className="a-skills">
            <img src={Node} alt="Node" className="a-skill-img" />
            <div className="skill-text">
              {/* <h4 className="a-skill-title">Node.JS</h4> */}
            </div>
          </div>
        </div>

        <div className="skill-2">
          <div className="a-skills">
            <img src={ReactLogo} alt="React" className="a-skill-img" />
            <div className="skill-text">
              {/* <h4 className="a-skill-title">React</h4> */}
            </div>
          </div>
          <div className="a-skills">
            <img src={Bootstrap} alt="Bootstrap" className="a-skill-img" />
            <div className="skill-text">
              <div className="skill-text">
                {/* <h4 className="a-skill-title">Bootstrap</h4> */}
              </div>
            </div>
          </div>

          <div className="a-skills">
            <img src={MySql} alt="MySql" className="a-skill-img" />
            <div className="skill-text">
              {/* <h4 className="a-skill-title">MySql</h4> */}
            </div>
          </div>
          <div className="a-skills">
            <img src={Graphql} alt="GraphQl" className="a-skill-img" />
            <div className="skill-text">
              {/* <h4 className="a-skill-title">GraphQl</h4> */}
            </div>
          </div>
        </div>

        {/* <div className="skill-3"> */}

        {/* </div> */}
      </div>

      <div className="a-right">
        <h1 className="a-title">hi, visitor</h1>
        <p className="a-quote">
          “’Tis some visitor,” I muttered, “tapping at my chamber door— <br />
          Only this and nothing more.”
        </p>
        <p className="a-qoute-author">Edgar Allan Poe</p>
        <p className="a-description">
          Hi! I'm Leticia, from Brazil. I've lived in San Francisco for over
          three years now: came to learn English and never left! I enjoy the
          beaches, of course, but miss the sunny days. You can always find me
          watching the sunset.
        </p>
        <p className="a-description-link">
          <a href={require("../../img/lnardi-resume.pdf")} download id="pdf">
            &#60; Download my resume clicking here &#62;
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
