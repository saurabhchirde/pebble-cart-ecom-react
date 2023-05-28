import { InputTypeOneProps } from "./input-types";

export const InputTypeOne: React.FC<InputTypeOneProps> = (props) => {
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
            value={props.value}
          />
        </div>
      </label>
    </div>
  );
};

InputTypeOne.defaultProps = {
  type: "text",
  name: "",
  required: false,
  placeholder: "",
  onChange: () => {},
};
