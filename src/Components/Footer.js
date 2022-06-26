import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Button3 from "../Components/Button3";
import footerlogo from "../images/footer-right-logo.png";

function Footer() {
  return (
    <>
      <div className="container-fluid footer-container">
        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-2">
            <h3 className="footer-font">Contact Us</h3>
            <div className="footer-text-font">
              <a href="tel:+1-347-470-2970">347-470-2970</a> <br />
              <a href="gmail.com">info@simplylogisticsservices.com</a>
            </div>
          </div>
          <div className="col-lg-2 col-md-2">
            <h3 className="footer-font">Costumer Service</h3>
            <div className="footer-text-font">
              <Link
                to="/Contact"
                style={{ color: "#FFF", textDecoration: "none" }}
              >
                {" "}
                Contact Us <br />
              </Link>
              Shipment Tracking <br />
              <Link to="/FAQ" style={{ color: "#FFF", textDecoration: "none" }}>
                {" "}
                FAQ
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-2">
            <h3 className="footer-font">Information</h3>
            <div className="footer-text-font">
              <Link
                to="/About"
                style={{ color: "#FFF", textDecoration: "none" }}
              >
                {" "}
                About Us{" "}
              </Link>
              <br />
              Privacy Policy
              <br />
              Terms & Conditions
            </div>
          </div>
          <div className="col-lg-2 col-md-2">
            <h3 className="footer-font">
              Subscribe to Simply Logistics Services via Email
            </h3>
            <div className="footer-text-font">
              <div className="footer-subscribe">
                <form>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Email Address"
                  />
                </form>
                <div className="footer-button">
                  <Button3 name="Subscribe" siz="sm" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2">
            {/* <h3 className="footer-font">Photo</h3> */}
            <div>
              <img
                src={footerlogo}
                alt="footerlogo"
                className="img-fluid"
                width="200px"
              />
            </div>
            <br />
            <div className="footer-img-text-font">
              ©SimplyLogisticsServices 2021 <br />
              All Rights Reserved
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Footer;
