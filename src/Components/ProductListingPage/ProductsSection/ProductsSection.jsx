import { useFilter, useProductProvider } from "../../../Context";
import ProductsCard from "./ProductsCard/ProductsCard";
import { finalFilteredData } from "../../../Utils/FilterFunctions/finalFilteredData";
import "./ProductSection.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ProductsSection = () => {
  const { filterState, filterDispatch } = useFilter();
  const { productState } = useProductProvider();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/products/camera") {
      filterDispatch({ type: "Clear" });
      filterDispatch({ type: "Camera", payload: "Camera" });
    } else if (location.pathname === "/products/lenses") {
      filterDispatch({ type: "Clear" });
      filterDispatch({ type: "Lenses", payload: "Lenses" });
    } else if (location.pathname === "/products/tripods") {
      filterDispatch({ type: "Clear" });
      filterDispatch({ type: "Tripods", payload: "Tripods" });
    } else if (location.pathname === "/products/accessories") {
      filterDispatch({ type: "Clear" });
      filterDispatch({ type: "Accessories", payload: "Accessories" });
    } else {
      filterDispatch({ type: "Clear" });
    }
  }, [location.pathname]);

  const categoryName =
    filterState.byCategory.camera &&
    filterState.byCategory.lenses &&
    filterState.byCategory.tripod &&
    filterState.byCategory.accessories
      ? "All Categories"
      : filterState.byCategory.camera &&
        filterState.byCategory.lenses &&
        filterState.byCategory.tripod
      ? "Cameras, Lenses & Tripods"
      : filterState.byCategory.camera &&
        filterState.byCategory.lenses &&
        filterState.byCategory.accessories
      ? "Cameras, Lenses & Other Accessories"
      : filterState.byCategory.camera &&
        filterState.byCategory.tripod &&
        filterState.byCategory.accessories
      ? "Cameras, Tripods & Other Accessories"
      : filterState.byCategory.camera && filterState.byCategory.lenses
      ? "Cameras & Lenses"
      : filterState.byCategory.camera && filterState.byCategory.tripod
      ? "Cameras & Tripods"
      : filterState.byCategory.camera && filterState.byCategory.accessories
      ? "Cameras & Other Accessories"
      : filterState.byCategory.camera
      ? "Camera"
      : filterState.byCategory.lenses &&
        filterState.byCategory.tripod &&
        filterState.byCategory.accessories
      ? "Lenses, Tripods & Other Accessories"
      : filterState.byCategory.lenses && filterState.byCategory.tripod
      ? "Lenses & Tripods"
      : filterState.byCategory.lenses && filterState.byCategory.accessories
      ? "Lenses & Other Accessories"
      : filterState.byCategory.lenses
      ? "Lenses"
      : filterState.byCategory.tripod && filterState.byCategory.accessories
      ? "Tripods & Other Accessories"
      : filterState.byCategory.tripod
      ? "Tripods"
      : filterState.byCategory.accessories
      ? "Other Accessories"
      : null;

  return (
    <>
      <section className="products">
        <h1>Showing All {categoryName !== null ? categoryName : "Products"}</h1>
        <div className="flex-row flex-wrap">
          {finalFilteredData(productState.products, filterState).length ===
          0 ? (
            <h1 className="no-product-error">
              No Products Found For The Selected Options, Try Again.
            </h1>
          ) : (
            finalFilteredData(productState.products, filterState).map(
              (item) => {
                return (
                  <ProductsCard item={{ ...item, qty: 1 }} key={item._id} />
                );
              }
            )
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
