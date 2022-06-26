import React from "react";
import "./ChangeText.css";
import Prices from "../Buttons/Prices";
import Delivery from "../Buttons/Delivery";
import Support from "../Buttons/Support";
import Buttons from "../Components/Buttons";

function ChangeText() {
  return (
    <>
    <div className="CT-container">
      <div className="icon-container">
        <Prices />
        <Delivery />
        <Support />
      </div>
      <div className="text-container">
        <p className="ch-text-font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi
        </p>
        <Buttons name="Get a Quote" siz="md" />
      </div>
      </div>
    </>
  );
}

export default ChangeText;
