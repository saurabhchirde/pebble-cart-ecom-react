import React from "react";
import { ButtonSimpleProps } from "./button-types";

export const ButtonSimple: React.FC<ButtonSimpleProps> = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={props.btnClassName}>
        {props.label}
      </button>
    </>
  );
};

ButtonSimple.defaultProps = {
  onClick: () => {},
  btnClassName: "",
  label: "",
};
