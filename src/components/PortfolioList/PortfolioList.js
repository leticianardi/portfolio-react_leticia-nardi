import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import "./portfolioList.css";
import { products } from "../../data.js";

function PortfolioList() {
  return (
    <div className="portf-list">
      <div className="pl-texts">
        <h1 className="pl-title">what has been done</h1>
        <p className="pl-description">Enim nisi aute ad id enim eu mollit.</p>
      </div>
      <div className="pl-list">
      {products.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioList;
