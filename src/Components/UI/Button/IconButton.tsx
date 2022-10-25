import { IconButtonProps } from "./button-types";

export const IconButton = (props: IconButtonProps) => {
  return (
    <>
      <button
        onClick={props.onClick || null}
        className={props.btnClassName || ""}
      >
        <i className={props.icon || ""}></i>
      </button>
    </>
  );
};

IconButton.defaultProps = {
  icon: "",
  btnClassName: "",
  onClick: null,
};
