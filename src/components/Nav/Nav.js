import React from "react";
import "./nav.css";
// import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = (props) => {
  const { currentCategory, setCurrentCategory } = props;

  return (
    <header className="header">
      <div className="nav-left">
        <h2>
          <a data-testid="link" href="/">
            Leticia Nardi
          </a>
        </h2>
      </div>

      <div className="nav-right">
        <nav>
          <ul className="n-items">
            <span
              className={currentCategory === "about"}
              onClick={() => setCurrentCategory("aboutme")}
            >
              About Me
            </span>

            <span
              className={currentCategory === "portfoliolist"}
              onClick={() => setCurrentCategory("portfoliolist")}
            >
              Portfolio
            </span>

            <span
              className={currentCategory === "contact"}
              onClick={() => setCurrentCategory("contact")}
            >
              Contact
            </span>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
