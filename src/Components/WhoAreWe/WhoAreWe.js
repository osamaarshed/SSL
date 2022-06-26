import React from "react";
import "./WhoAreWe.css";
import Buttons from "../Buttons";
import wawtruck from "../../images/waw-truck.png";
import map from "../../images/map-background.png";
// import Counter from "../Counter/Counter";

function WhoAreWe() {
  return (
    <>
      <div className="container-fluid waw-container">
        <div className="waw-maps">
          <img src={map} className="img-fluid" alt="maps" />
        </div>
        <div className="waw-box-container">
          <div className="waw-heading">
            <h1 className="waw-heading-font">
              <b>WHO ARE WE </b>
            </h1>
          </div>
          <div className="waw-image-container">
            <div className="row justify-content-center ">
              <div className="col-lg-5 ">
                <img
                  src={wawtruck}
                  className="img-fluid waw-truck-img"
                  width="350px"
                  alt="truck"
                />
              </div>
              <div className="col-lg-5">
                <p className="waw-text">
                  <span className="waw-text-color">
                    Simply Logistics Services LLC{" "}
                  </span>{" "}
                  is a third party logistics transportation company based in
                  USA, NEW JERSEY. The main objective of Simply Logistics
                  Services LLC is to provide top-notch logistics services at
                  decreased prices for the advanced performance of businesses.
                  Our carriers offer a range of equipment and features like Dry
                  Vans, Flatbeds, Reefers, Step deck, and Power only dispatch
                  services. What distinguishes us from other logistics companies
                  is the association with our carriers.
                </p>
                <div className="waw-button-adjust">
                  <Buttons name="Learn More" siz="md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoAreWe;
