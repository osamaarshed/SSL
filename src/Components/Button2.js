import React from "react";
import "./Button2.css";
import Button from "react-bootstrap/Button";

const Button2 = (props) => {
  return (
    <div>
      <Button className="style2 rounded-pill" size={props.siz}>
        {props.name}
      </Button>
    </div>
  );
};

export default Button2;
