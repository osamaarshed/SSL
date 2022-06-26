import React from "react";
import delivery from "../images/delivery.png";
import "./Delivery.css";

function Delivery() {
  return (
    <div>
      <div className="icon">
        <img src={delivery} className="navbar-logo  " height="45" alt="price" />
        <h3 className="icon-font ch-text-font">Deliver</h3>
      </div>
    </div>
  );
}

export default Delivery;
