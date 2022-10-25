import { InputTypeOneProps } from "./input-types";

export const InputTypeOne = (props: InputTypeOneProps) => {
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
        </div>
      </label>
    </div>
  );
};

InputTypeOne.defaultProps = {
  className: "",
  type: "text",
  name: "",
  required: false,
  autoComplete: false,
  placeholder: "",
  onChange: null,
};
