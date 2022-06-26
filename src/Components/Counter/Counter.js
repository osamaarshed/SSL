import React from "react";
import CountUp from "react-countup";
import "./Counter.css";

function Counter() {
  return (
    <>
      <div className="container-fluid c-counter">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-4 counter-font">
            <CountUp start={0} end={8000} duration={3} />+
            <p className="c-paragraph"> Tonnes Transported</p>
          </div>
          <div className="col-lg-4 col-md-4 counter-font">
            <CountUp start={0} end={200} duration={3} />+
            <p className="c-paragraph"> Company Employees</p>
          </div>
          <div className="col-lg-4 col-md-4 counter-font">
            <CountUp start={0} end={100} duration={3} />+
            <p className="c-paragraph"> Clients Satisfied</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
