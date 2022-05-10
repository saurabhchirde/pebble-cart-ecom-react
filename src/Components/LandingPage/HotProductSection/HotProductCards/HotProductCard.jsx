import { useTheme } from "../../../../Context";

const HotProductCard = (props) => {
  const { darkTheme } = useTheme();

  return (
    <div
      onClick={props.onClick}
      className={
        darkTheme
          ? "card-vertical-info card-dark"
          : "card-vertical-info card-light"
      }
    >
      <div className="card-img-container">
        <img src={props.imgSrc} alt="camera" loading="lazy" />
      </div>
      <div className={darkTheme ? "card-text" : "card-text card-text-light"}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default HotProductCard;
