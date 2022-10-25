import { BadgeIconButtonProps } from "./button-types";

export const BadgeIconButton = (props: BadgeIconButtonProps) => {
  return (
    <>
      <div className={props.btnWrapper || ""}>
        <button
          onClick={props.onClick || null}
          className={props.btnClassName || ""}
        >
          <i className={props.icon}>
            <span className={props.badgeClassName || ""}>
              {props.badgeValue || ""}
            </span>
          </i>{" "}
          {props.label || ""}
        </button>
      </div>
    </>
  );
};

BadgeIconButton.defaultProps = {
  className: "",
  onClick: null,
};
