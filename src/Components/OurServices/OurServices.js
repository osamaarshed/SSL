import React from "react";
import "./OurServices.css";
import box from "../../images/Box.png";
import truck from "../../images/Truck.png";
import phone from "../../images/Phone.png";
import Card from "react-bootstrap/Card";
import Buttons from "../Buttons";
import GotSomething from "../OurServices/GotSomething";

function OurServices() {
  return (
    <>
      <div className="heading-container">
        <h1 className="heading">
          <b>OUR SERVICES </b>
        </h1>
      </div>
      <div className="back-container">
        <section className="back-darkblue"></section>
        <section className="back-lightblue"></section>
        <section className="back-darkblue"></section>
      </div>
      <div className="images-container">
        <div className="box-image-container">
          <Card style={{ width: "13rem" }} className="card">
            <Card.Img src={box} className="box-image" />
            <Card.Body className="body">
              <Card.Title className="ourservices-card-title">
                <b>Dispaching</b>
              </Card.Title>
            </Card.Body>
          </Card>
          <div className="button">
            <Buttons name="Get Started" siz="md" />
          </div>
        </div>
        <div className="truck-image-container">
          <Card style={{ width: "13rem" }}>
            <Card.Img src={truck} className="truck-image" />
            <Card.Body className="body">
              <Card.Title className="ourservices-card-title-truck">
                <b>Road Freight</b>
              </Card.Title>
            </Card.Body>
          </Card>
          <div className="button">
            <Buttons name="Learn More" siz="md" />
          </div>
        </div>
        <div className="phone-image-container">
          <Card style={{ width: "13rem" }}>
            <Card.Img src={phone} className="phone-image" />
            <Card.Body className="body">
              <Card.Title className="ourservices-card-title">
                <b>24/7 Support</b>
              </Card.Title>
            </Card.Body>
          </Card>
          <div className="button">
            <Buttons name="Get in Touch" siz="md" />
          </div>
        </div>
      </div>
      <GotSomething />
    </>
  );
}

export default OurServices;
