import Button from "../../../UI/Button/Button";

const HeaderBanner = (props) => {
  return (
    <>
      <div className="hero-banner">
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Button
            label={props.btnLabel}
            btnClassName="btn primary-text-btn-lg"
            onClick={() => {}}
          />
        </div>
        <img
          src={props.imgSrc}
          alt="image"
          loading="lazy"
          className="img-responsive"
        />
      </div>
    </>
  );
};

export default HeaderBanner;
