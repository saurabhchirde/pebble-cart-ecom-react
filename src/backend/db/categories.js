import { v4 as uuid } from "uuid";

/*
  Category Database
*/

export const categories = [
  {
    _id: uuid(),
    categoryName: "camera",
    description: "All types of cameras",
  },
  {
    _id: uuid(),
    categoryName: "lenses",
    description: "All types of lenses for camera and mobiles",
  },
  {
    _id: uuid(),
    categoryName: "tripods",
    description: "Triposd for camera and mobile photography",
  },
  {
    _id: uuid(),
    categoryName: "accessories",
    description: "All other accessories related to photograhy.",
  },
];
