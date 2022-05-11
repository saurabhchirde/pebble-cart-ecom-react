import React from "react";

export const ButtonSimple = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={props.btnClassName}>
        {props.label}
      </button>
    </>
  );
};
