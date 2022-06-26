import React from "react";
import "./GotSomething.css";
import gstruck from "../../images/GotSomethingTruck.png";
import box from "../../images/Box.png";
import Button2 from "../Button2";

function GotSomething() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center container-container ">
          <div className="col-lg-2 col-md-2 col-sm-2 gs-img">
            <img src={gstruck} className="img-fluid gs-img-img" alt="lifter" />
          </div>
          <div className="col-lg-8 col-md-10 col-sm-10  container-text-container">
            <div className="row justify-content-center">
              <div className="col-7 gs-text-container">
                <h2 className="gs-heading-font">
                  <b>GOT SOMETHING TO DELIVER?</b>
                </h2>
                <p className="paragraph-font">
                  Whether you require distribution or fulfilment, defined
                  freight forwarding, or a complete supply chain solution, we
                  are here for you.
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 imgbtn-container">
                <img src={box} className="img-fluid gs-box-img" alt="banner" />
                <div className="gsbutton">
                  <Button2 name="Get Started" siz="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GotSomething;
