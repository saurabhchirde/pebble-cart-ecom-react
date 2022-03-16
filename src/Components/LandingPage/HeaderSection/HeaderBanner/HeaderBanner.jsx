import Button from "../../../UI/Button/Button";
import { Link } from "react-router-dom";

const HeaderBanner = (props) => {
  return (
    <>
      <div className="hero-banner">
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Link to="products">
            <Button
              label={props.btnLabel}
              btnClassName="btn primary-text-btn-lg"
            />
          </Link>
        </div>
        <img
          src={props.imgSrc}
          alt="camera"
          loading="lazy"
          className="img-responsive"
        />
      </div>
    </>
  );
};

export default HeaderBanner;
