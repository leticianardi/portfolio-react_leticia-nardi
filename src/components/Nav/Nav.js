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
            <li className={currentCategory === "about"}>
              <span onClick={() => setCurrentCategory("aboutme")}>
                About Me
              </span>
            </li>

            <li className={currentCategory === "portfoliolist"}>
              <span onClick={() => setCurrentCategory("portfoliolist")}>
                Portfolio
              </span>
            </li>

            <li className={currentCategory === "contact"}>
              <span onClick={() => setCurrentCategory("contact")}>Contact</span>
            </li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
};

export default Nav;
