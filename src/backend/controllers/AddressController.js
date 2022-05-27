import { Response } from "miragejs";
import uuid from "react-uuid";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to addresses are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's addresses.
 * send GET Request at /api/user/addresses
 * */
export const getAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userAddresses = schema.users.findBy({ _id: userId }).addresses;
  return new Response(200, {}, { addresses: userAddresses });
};

/**
 * This handler handles adding items to user's address
 * send POST Request at /api/user/addresses
 * body contains {product}
 * */

export const addAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userAddresses = schema.users.findBy({ _id: userId }).addresses;
    const { address } = JSON.parse(request.requestBody);
    userAddresses.push({
      ...address,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      _id: uuid(),
    });
    this.db.users.update({ _id: userId }, { addresses: userAddresses });
    return new Response(201, {}, { addresses: userAddresses });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's address
 * send DELETE Request at /api/user/addresses/:addressId
 * */

export const removeAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userAddresses = schema.users.findBy({ _id: userId }).addresses;
    const addressId = request.params.addressId;
    userAddresses = userAddresses.filter((item) => item._id !== addressId);
    this.db.users.update({ _id: userId }, { addresses: userAddresses });
    return new Response(200, {}, { addresses: userAddresses });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * send POST Request at /api/user/addresses/:addressId
 * **/

export const updateAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userAddresses = schema.users.findBy({ _id: userId }).addresses;
    const { addressId } = request.params;
    const { address } = JSON.parse(request.requestBody);
    const updatedAddresses = userAddresses.map((item) => {
      if (item._id === addressId) return { ...address };
      return item;
    });
    this.db.users.update({ _id: userId }, { addresses: updatedAddresses });
    return new Response(200, {}, { addresses: updatedAddresses });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
