import React from "react";
import "./About.css";
import Buttons from "../../Components/Buttons";

function About() {
  return (
    <div>
      <div className="about-heading-container">
        <h1 className="about-heading">About</h1>
      </div>
      <div className="container">
        <p className="about-upper-para">
          {" "}
          Whether you require distribution or fulfillment, defined freight
          forwarding, or a complete supply chain solution,
          <span className="about-span"> we are here for you. </span>
        </p>
        <p className="about-lower-para">
          Simply Logistics Services LLC is a third party logistics
          transportation company based in the USA, NEW JERSEY. The main
          objective of Simply Logistics Services LLC is to provide top-notch
          logistics services at decreased prices for the advanced performance of
          businesses. Our carriers offer a range of equipment and features like
          Dry Vans, Flatbeds, Reefers, Step deck, and Power only dispatch
          services. What distinguishes us from other logistics companies is the
          association with our carriers.
        </p>
        <div className="about-button">
          <Buttons name="Get a Quote" siz="md" />
        </div>
      </div>
    </div>
  );
}

export default About;
