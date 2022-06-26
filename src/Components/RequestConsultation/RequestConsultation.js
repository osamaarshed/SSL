import React from "react";
import "./RequestConsultation.css";

import Request from "./Request";
import Stillgotquestion from "./Stillgotquestion";

function RequestConsultation() {
  return (
    <>
      <div className="container-fluid rc-container">
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <Request />
          </div>
          <div className="col-lg-3 col-md-3 rc-second-display">
            <Stillgotquestion />
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestConsultation;
