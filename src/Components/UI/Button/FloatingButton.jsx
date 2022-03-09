import React from "react";

const FloatingButton = (props) => {
  return (
    <>
      <a href={props.href} class="float-up-btn">
        <button class="btn floating-btn-md float-btn-dark-bg">
          <i class={props.icon}></i>
        </button>
      </a>
    </>
  );
};

export default FloatingButton;
