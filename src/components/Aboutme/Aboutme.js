import React from "react";
import "./aboutme.css";
import Turtle from "../../img/turtle.jpg";

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
      </div>
    </div>
  );
};

export default Aboutme;
