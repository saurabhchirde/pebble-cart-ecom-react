import { ButtonProps } from "./button-types";

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className={props.btnWrapper}>
      <button
        onClick={props.onClick}
        type={props.type}
        className={props.btnClassName}
      >
        {props.label}
      </button>
    </div>
  );
};

Button.defaultProps = {
  onClick: () => {},
  btnWrapper: "",
  btnClassName: "",
  label: "",
  type: undefined,
};
