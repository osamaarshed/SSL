import React from "react";
import "./Contact.css";
import fbicon from "../../images/fbicon.png";
import twittericon from "../../images/twittericon.png";
import whatsappicon from "../../images/whatsappicon.png";
import instaicon from "../../images/instaicon.png";
import mapsicon from "../../images/mapsicon.png";
import phoneicon from "../../images/phoneicon.png";
import mailicon from "../../images/mailicon.png";
import illustration from "../../images/Illustration.png";
import Forms from "../../Components/Forms";

function Contact() {
  return (
    <>
      <div className="contact-heading-container">
        <h1 className="contact-heading">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row contact-background">
          <div className="col-lg-3  ">
            <img
              className="img-fluid contact-img"
              src={illustration}
              alt="illustration"
            />
          </div>
          <div className="col-lg-4 ">
            <h1 className="contact-FUO">Please Fill this Form</h1>
            <p>
              Your information will be kept safe, and only used to contact you
              when necessary.
            </p>
            <div>
              <Forms />
            </div>
          </div>
          <div className="col-lg-4 ">
            <h1 className="contact-FUO">Find Us On:</h1>
            <div className="row contact-upper-icons">
              <div className="col-lg-3">
                <img className="img-fluid" src={fbicon} alt="phone" />
              </div>
              <div className="col-lg-3">
                <img className="img-fluid" src={twittericon} alt="twitter" />
              </div>
              <div className="col-lg-3">
                <img className="img-fluid" src={whatsappicon} alt="whatsapp" />
              </div>
              <div className="col-lg-3">
                <img className="img-fluid" src={instaicon} alt="insta" />
              </div>
            </div>
            <div className="contact-below-block">
              <div className="contact-map-img-direction">
                <img
                  className="img-fluid "
                  width="60px"
                  src={mapsicon}
                  alt="map"
                />
                <p className="contact-below-paragraph">
                  {" "}
                  312 Webster Ave BB Brooklyn, NY 11230{" "}
                </p>
              </div>
              <div className="contact-phone-img-direction">
                <img
                  className="img-fluid "
                  width="60px"
                  src={phoneicon}
                  alt="phone"
                />
                <p className="contact-below-paragraph">347-470-2970</p>
              </div>
              <div className="contact-mail-img-direction">
                <img
                  className="img-fluid "
                  width="60px"
                  src={mailicon}
                  alt="mail"
                />
                <p className="contact-below-paragraph">
                  {" "}
                  info@simplylogisticsservices.com{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
