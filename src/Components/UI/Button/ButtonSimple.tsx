import React from "react";
import { ButtonSimpleProps } from "./button-types";

export const ButtonSimple = (props: ButtonSimpleProps) => {
  return (
    <>
      <button
        onClick={props.onClick || null}
        className={props.btnClassName || ""}
      >
        {props.label || ""}
      </button>
    </>
  );
};

ButtonSimple.defaultProps = {
  onClick: null,
};
