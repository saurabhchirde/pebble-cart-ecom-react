import { v4 as uuid } from "uuid";

/*
  Brands Database
*/

export const brands = [
  {
    _id: uuid(),
    categoryName: "canon",
    description: "All products of Canon.",
  },
  {
    _id: uuid(),
    categoryName: "nikon",
    description: "All products of Nikon.",
  },
  {
    _id: uuid(),
    categoryName: "sony",
    description: "All products of Sony.",
  },
  {
    _id: uuid(),
    categoryName: "other",
    description: "All other brand products.",
  },
];
