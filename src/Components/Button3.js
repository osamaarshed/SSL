import React from "react";
import "./Button3.css";
import Button from "react-bootstrap/Button";

const Button3 = (props) => {
  return (
    <div>
      <Button className="style3 rounded-pill" size={props.siz}>
        {props.name}
      </Button>
    </div>
  );
};

export default Button3;
