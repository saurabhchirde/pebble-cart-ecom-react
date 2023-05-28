import { InputTypeTwoProps } from "./input-types";

export const InputTypeTwo: React.FC<InputTypeTwoProps> = (props) => {
  return (
    <label>
      <div onClick={props.onClick} className={props.inputWrapper}>
        <div className={props.iconWrapper}>
          <i className={props.icon}></i>
          <input
            type={props.type}
            name={props.name}
            required={props.required}
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
            onChange={props.onChange}
            checked={props.checked}
            value={props.value}
          />
        </div>
        {props.label}
      </div>
    </label>
  );
};

InputTypeTwo.defaultProps = {
  onClick: () => {},
  type: "text",
  name: "",
  required: false,
  placeholder: "",
  onChange: () => {},
  checked: false,
  icon: "",
  iconWrapper: "",
  label: "",
};
