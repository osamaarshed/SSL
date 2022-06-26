import React from "react";
import virtualassistant from "../../images/virtual-assistant.png";
import Buttons from "../Buttons";
import "./RequestConsultation.css";

function Request() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center rc-display">
          <div className="col-lg-4 col-md-4 rc-img">
            <img
              className="img-fluid rc-img-img"
              src={virtualassistant}
              width="350px"
              alt="assistant"
            />
          </div>

          <div className="col-lg-6 col-md-6 rc-text">
            <h2 className="rc-heading-color">Request Consultation</h2>
            <p className="rc-text-weight">
              Thousands of projects have made our company a leader in
              construction area. We stand behind our promise to deliver timely
              and quality service.
            </p>
            <div className="rc-button">
            <Buttons name="Contact Us" siz="md" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Request;
