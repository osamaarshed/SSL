import React from "react";
import questions from "../../images/still-got-questions.png";
import Buttons from "../Buttons";
import "./RequestConsultation.css";

function Stillgotquestion() {
  return (
    <div>
      <div>
        <img
          className="img-fluid sgq-img"
          src={questions}
          width="220px"
          alt="still-got-questions"
        />
      </div>
      <div>
        <h3 className="rc-second-heading">Still Got Questions?</h3>
        <Buttons name="Visit FAQ" siz="md" />
      </div>
    </div>
  );
}

export default Stillgotquestion;
