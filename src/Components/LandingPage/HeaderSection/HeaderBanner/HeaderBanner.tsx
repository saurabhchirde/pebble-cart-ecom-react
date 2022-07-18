import { Button } from "Components";
import { Link } from "react-router-dom";
import { useTheme } from "Context";

interface HeaderBannerProps {
  imgSrc: string;
  title: string;
  description: string;
  btnLabel: string;
}

export const HeaderBanner = (props: HeaderBannerProps) => {
  const { darkTheme } = useTheme();

  return (
    <>
      <div
        className={darkTheme ? "hero-banner" : "hero-banner hero-banner-light"}
      >
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Link to="/products">
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
          className="img-responsive banner-animation"
        />
      </div>
    </>
  );
};
