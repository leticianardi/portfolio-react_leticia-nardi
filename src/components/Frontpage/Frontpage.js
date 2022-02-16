import React from "react";
import "./frontpage.css";
import Shape from "../../img/shape.jpeg";

const about = () => {
  return (
    <div className="front-section">
      <div className="front-left">
        <div className="front-left-wrapper">
          <h2 className="front-intro">Hi, good to see you.</h2>
          <h1 className="front-name">I am Leticia</h1>
          <div className="front-title">
            <div className="front-titlle-wrapper">
              {/* <div className="a-title-item">...</div> */}
              <div className="front-title-item">hello,</div>
              <div className="front-title-item">world.</div>
              <div className="front-title-item">hello,</div>
            </div>
          </div>
          <p className="front-description">I design and develop small projects.</p>
        </div>
      </div>

      <div className="front-right">
        <div className="front-img-bg"></div>
        <img src={Shape} alt="" className="front-img" />
      </div>
    </div>
  );
};

export default about;
