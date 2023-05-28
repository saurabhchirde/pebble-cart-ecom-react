import { useTheme } from "Context";

interface SquareCardsProps {
  imgSrc: string;
  title: string;
}

export const SquareCards: React.FC<SquareCardsProps> = (props) => {
  const { darkTheme } = useTheme();

  const squareCardClass = darkTheme
    ? "card-vertical-info card-dark"
    : "card-vertical-info card-vertical-info-light";

  return (
    <>
      <div className={squareCardClass}>
        <div className="card-img-container">
          <img src={props.imgSrc} alt="icon" />
        </div>
        <div className="card-text">
          <h1>{props.title}</h1>
        </div>
      </div>
    </>
  );
};
