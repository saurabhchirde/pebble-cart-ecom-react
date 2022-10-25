import { ButtonProps } from "./button-types";

export const Button = (props: ButtonProps) => {
  return (
    <div className={props.btnWrapper || ""}>
      <button
        onClick={props.onClick || null}
        type={props.type}
        className={props.btnClassName || ""}
      >
        {props.label || ""}
      </button>
    </div>
  );
};

Button.defaultProps = {
  onClick: null,
  className: "",
};
