import { Link } from "react-router-dom";
import { ButtonSimple } from "Components";
import { useAuth } from "Context";
import "./NotFound.css";

export const NotFound = () => {
  const { auth } = useAuth();

  return (
    <div className="page-not-found">
      <div className="error-number">
        <h1>4</h1>
        <h1>0</h1>
        <h1>4</h1>
      </div>
      <h2>Page Not Found</h2>
      {!auth.login && (
        <Link to="/">
          <ButtonSimple
            label="Back to Home"
            btnClassName="btn primary-text-btn-lg"
          />
        </Link>
      )}
      {auth.login && (
        <Link to="/home">
          <ButtonSimple
            label="Back to Home"
            btnClassName="btn primary-text-btn-lg"
          />
        </Link>
      )}
    </div>
  );
};
