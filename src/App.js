import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Frontpage from "./components/Frontpage/Frontpage";
import AboutMe from "./components/Aboutme/Aboutme";
// import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioList from "./components/PortfolioList/PortfolioList";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [currentCategory, setCurrentCategory] = useState("about");

  const displaySection = () => {
    switch (currentCategory) {
      case "about":
        return <Frontpage />;
      case "aboutme":
        return <AboutMe />;
      case "portfoliolist":
        return <PortfolioList />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <Nav
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Nav>
      </div>
      <div>
        {/* <Frontpage /> */}
        {/* <AboutMe />
        <PortfolioList />
        <Contact /> */}
      </div>
      <div>
        <div>{displaySection()}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
