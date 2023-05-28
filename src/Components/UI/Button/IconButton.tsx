import { IconButtonProps } from "./button-types";

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={props.btnClassName}>
        <i className={props.icon}></i>
      </button>
    </>
  );
};

IconButton.defaultProps = {
  icon: "",
  btnClassName: "",
  onClick: () => {},
};
