import { Link } from "react-router-dom";
import { ButtonSimple } from "Components";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="page-not-found">
      <div className="error-number">
        <h1>4</h1>
        <h1>0</h1>
        <h1>4</h1>
      </div>
      <h2>Page Not Found</h2>
      <Link to="/">
        <ButtonSimple
          label="Back to Home"
          btnClassName="btn primary-text-btn-lg"
        />
      </Link>
    </div>
  );
};
