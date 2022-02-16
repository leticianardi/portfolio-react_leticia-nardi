import React from "react";
import "./about.css";
// import Me from "../../img/euzinha2.png";

const about = () => {
  return (
    <div className="about-section">
      <div className="about-left">
        <div className="a-left-wrapper">
          <h2 className="about-intro">Hi, good to see you.</h2>
          <h1 className="about-name">I am Leticia</h1>
          <div className="a-title">
            <div className="a-titlle-wrapper">
              <div className="a-title-item">Web Developer</div>
              <div className="a-title-item">...</div>
              <div className="a-title-item">UI/UX Designer</div>
              <div className="a-title-item">...</div>
            </div>
          </div>
          <p className="a-description">I design and develop small projects.</p>
        </div>
      </div>

      <div className="about-right">
        <div className="a-img-bg"></div>
        {/* <img src={Me} alt="" className="a-img" /> */}
      </div>
    </div>
  );
};

export default about;
