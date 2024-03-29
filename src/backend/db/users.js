import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";

/**
 * User Database
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Saurabh",
    lastName: "Chirde",
    email: "saurabh.chirde@gmail.com",
    password: bcyrpt.hashSync("saurabh@123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses: [],
  },
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "User",
    email: "guest@gmail.com",
    password: bcyrpt.hashSync("guest@123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses: [],
  },
];
