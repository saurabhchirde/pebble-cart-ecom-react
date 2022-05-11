import { useTheme } from "Context";

export const ProductDescription = ({ item }) => {
  const { darkTheme } = useTheme();
  return (
    <div
      className={
        darkTheme
          ? "single-product-description"
          : "single-product-description single-product-description-light"
      }
    >
      <h2>About this item :</h2>
      <ol className="list-basic list-style-number">
        {item.description.map((info, index) => {
          return (
            <li className="product-description-text" key={index}>
              {info}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
