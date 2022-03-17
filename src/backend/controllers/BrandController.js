import { Response } from "miragejs";

/**
 * All the routes related to Brands are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all Brands in the db.
 * send GET Request at /api/brands
 * */

export const getAllBrandsHandler = function () {
  try {
    return new Response(200, {}, { brands: this.db.brands });
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
 * This handler handles gets all brands in the db.
 * send GET Request at /api/user/brand/:brandId
 * */

export const getBrandHandler = function (schema, request) {
  const brandId = request.params.brandId;
  try {
    const brand = schema.brands.findBy({ _id: brandId });
    return new Response(200, {}, { brand });
  } catch (error) {
    new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
