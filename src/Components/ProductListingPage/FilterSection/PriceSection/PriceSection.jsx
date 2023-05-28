import React from "react";
import { useFilter, useTheme } from "Context";
import "./PriceSection.css";

export const PriceSection = () => {
  const { filterDispatch } = useFilter();
  const { darkTheme } = useTheme();

  const onPriceChangeHandler = (e) => {
    filterDispatch({ type: "price", payload: e.target.value });
  };

  return (
    <div className="price-slider">
      <h2 className="price-slider-title">
        Price <span>(min)</span>
      </h2>
      <div
        className={
          darkTheme ? "price-slider-label-dark" : "price-slider-label-light"
        }
      >
        <span className="price-range">100</span>
        <span className="price-range">1K</span>
        <span className="price-range">10K</span>
        <span className="price-range">50K</span>
      </div>
      <div onChange={onPriceChangeHandler} className="price-range-input">
        <label>
          <input
            type="range"
            min="1"
            max="4"
            defaultValue="1"
            name="rating"
            step="1"
          />
        </label>
      </div>
    </div>
  );
};
