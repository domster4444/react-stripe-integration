import { Request, Response } from 'express';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * This function will return a list of all prices in the Stripe account.
 * @param {Request} req - Request - The request object
 * @param {Response} res - Response - the response object
 * @returns The prices objects are  being returned inside array
 */
//returns the list of all product with prices  in array format
export const listAllProduct = async (req: Request, res: Response) => {
  const productList = await stripe.prices.list();
  return productList;
};
