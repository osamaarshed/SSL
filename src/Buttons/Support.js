import React from "react";
import support from "../images/support.png";
import "./Support.css"

function Support() {
  return <div>
      <div className="icon">
          <img
            src={support}
            className="navbar-logo  "
            height="45"
            alt="price"
          />
          <h3 className="icon-font ch-text-font">Support</h3>
        </div>
  </div>;
}

export default Support;
