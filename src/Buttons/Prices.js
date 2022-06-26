import React from "react";
import price from "../images/Price-icon.png";
import "./Prices.css";

function Prices() {
  return (
    <div>
      <div className="icon">
        <img src={price} height="45" alt="price" />
        <h3 className="icon-font ch-text-font">Prices</h3>
      </div>
    </div>
  );
}

export default Prices;
