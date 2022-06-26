import React, { useState } from "react";
import "./Accordion.css";
import { FcExpand } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

function MyAccordion({ id, question, answer }) {
  const grey = "rgb(245, 245, 245)";
  const blue = "rgb(63, 186, 194)";
  const white = "rgb(255, 255, 255)";
  const black = " rgb(0, 0, 0)";

  const [show, setShow] = useState(false);
  const [bg, setBg] = useState(grey);
  const [txtColr, setTxtColr] = useState(black);

  const bgChange = () => {
    setBg(blue);
  };
  const txtChange = () => {
    setTxtColr(white);
  };
  const bothFunctions = () => {
    bgChange();
    txtChange();
  };
  return (
    <>
      <div>
        <div
          className="accordion-heading-container"
          style={{ backgroundColor: bg, color: txtColr }}
          onClick={bothFunctions}
        >
          <div>
            <h3 className="accordion-questions" onClick={() => setShow(!show)}>
              {id} . {question}
              <span className="accordion-arrow">
                {show ? <FcExpand /> : <FcNext />}
              </span>
            </h3>
          </div>
        </div>

        {show && (
          <div className="accordion-paragraph-container">
            <p className="accordion-paragraph">{answer}</p>
            <p className="accordion-wih">
              Was this answer helpful? <AiOutlineLike /> <AiOutlineDislike />{" "}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default MyAccordion;
