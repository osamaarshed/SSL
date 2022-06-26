import React, { useState } from "react";
import { questions } from "./Accodionapi";
import "./Accordion.css";
import MyAccordion from "./MyAccordion";

function Accordion() {
  const [data, setData] = useState(questions);
  return (
    <>
      {data.map((currentElement) => {
        const { id } = currentElement;
        return <MyAccordion key={id} {...currentElement} />;
      })}
    </>
  );
}

export default Accordion;
