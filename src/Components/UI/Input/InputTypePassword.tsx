import { InputTypePasswordProps } from "./input-types";

export const InputTypePassword = (props: InputTypePasswordProps) => {
  return (
    <div className={props.inputWrapper}>
      <label>
        {props.label}
        <div className={props.iconWrapper}>
          <i className={props.icon}></i>
          <input
            type={props.type}
            name={props.name}
            required={props.required}
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
          <i onClick={props.onEyeClick} className={props.eyeIcon}></i>
        </div>
      </label>
    </div>
  );
};

InputTypePassword.defaultProps = {
  onClick: null,
  className: "",
  type: "text",
  name: "",
  required: false,
  autoComplete: false,
  placeholder: "",
  onChange: null,
};
