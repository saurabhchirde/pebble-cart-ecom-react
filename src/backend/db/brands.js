import { v4 as uuid } from "uuid";

/*
  Brands Database
*/

export const brands = [
  {
    _id: uuid(),
    brandName: "canon",
    description: "All products of Canon.",
  },
  {
    _id: uuid(),
    brandName: "nikon",
    description: "All products of Nikon.",
  },
  {
    _id: uuid(),
    brandName: "sony",
    description: "All products of Sony.",
  },
  {
    _id: uuid(),
    brandName: "other",
    description: "All other brand products.",
  },
];
