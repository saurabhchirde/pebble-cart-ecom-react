import React from "react";
import { useFilter } from "Context";
import { InputTypeTwo } from "Components";

export const BrandSection = () => {
  const { filterState, filterDispatch } = useFilter();
  const { canon, nikon, sony } = filterState.byBrand;

  return (
    <div className="brand">
      <h2>Brand</h2>
      <div>
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={canon}
          label="Canon"
          onChange={() => {
            filterDispatch({ type: "Canon", payload: "Canon" });
          }}
          icon={""}
          iconWrapper={""}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={nikon}
          label="Nikon"
          onChange={() => {
            filterDispatch({ type: "Nikon", payload: "Nikon" });
          }}
          icon={""}
          iconWrapper={""}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={sony}
          label="Sony"
          onChange={() => {
            filterDispatch({ type: "Sony", payload: "Sony" });
          }}
          icon={""}
          iconWrapper={""}
        />
      </div>
    </div>
  );
};
