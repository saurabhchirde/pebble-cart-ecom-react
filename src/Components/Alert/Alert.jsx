import { useEffect } from "react";
import { useAlert } from "../../Context";
import "./Alert.css";

const Alert = (props) => {
  const { alertDispatch } = useAlert();

  useEffect(() => {
    const alertTime = setTimeout(() => {
      alertDispatch({ type: props.dispatchType });
    }, 700);
    return () => {
      clearTimeout(alertTime);
    };
  }, [props.dispatchType]);

  return (
    <div className={props.alert}>
      <i className={props.icon}></i>
      <span className="p-md">{props.text}</span>
    </div>
  );
};

export default Alert;
