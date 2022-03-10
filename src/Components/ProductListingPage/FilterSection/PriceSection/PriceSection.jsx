import React from "react";

const PriceSection = () => {
  return (
    <div className="price flex-col">
      <h2>Price</h2>
      <div className="price-label flex-row flex-justify-space-between">
        <p>5k</p>
        <p>10k</p>
        <p>15k</p>
        <p>20K</p>
      </div>
      <div className="range-input">
        <label>
          <input
            onChange={() => {}}
            type="range"
            min="5000"
            max="20000"
            // value="11000"
            name="volume"
            step="1000"
          />
          Rs. 11000
        </label>
      </div>
    </div>
  );
};
export default PriceSection;
