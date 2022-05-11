export const InputTypePassword = (props) => {
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
