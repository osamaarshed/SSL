import React from "react";
import "./Button.css";
import Button from "react-bootstrap/Button";

const Buttons = (props) => {
  return (
    <div>
      <Button className="style rounded-pill ch-text-font" size={props.siz}>
        {props.name}
      </Button>
    </div>
  );
};

export default Buttons;
