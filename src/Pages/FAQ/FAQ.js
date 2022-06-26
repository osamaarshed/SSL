import React from "react";
import "./FAQ.css";
import Accordion from "../../Components/Accordion/Accordion";
import Request from "../../Components/RequestConsultation/Request";

function FAQ() {
  return (
    <>
      <div className="FAQ-heading-container">
        <h1 className="FAQ-heading">FAQ</h1>
      </div>
      <div className="container">
        <div>
          <Accordion />
        </div>
        <div className="FAQ-below">
          <div className="FAQ-SNH">
            <h2 className="FAQ-SNH-heading">Still Need Help?</h2>
            <p className="FAQ-SNH-paragraph">Get in touch and get answers to all your questions.</p>
          </div>
          <Request />
        </div>
      </div>
    </>
  );
}

export default FAQ;
