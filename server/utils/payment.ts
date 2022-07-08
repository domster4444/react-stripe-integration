import { Request, Response } from 'express';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * This function will return a list of all prices in the Stripe account.
 * @param {Request} req - Request - The request object
 * @param {Response} res - Response - the response object
 * @returns The prices objects are  being returned inside array
 */
//returns the list of all product with prices  in array format
export const listAllProduct = async () => {
  const productList = await stripe.prices.list();
  return productList;
};
export const createStripeCustomer = async (emailParams: string) => {
  const customer = await stripe.customers.create({
    email: emailParams,
  });
  console.log('created stripe customer = ', customer);
  return customer;
};

export const createStripeCheckoutSession = async (
  planIdParam: any,
  quantityParam: number,
  stripeCustomerId: string
) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription', //! vary upon the type of payment you choosed in stripe.com
    payment_method_types: ['card'],
    line_items: [
      {
        price: planIdParam,
        quantity: quantityParam,
      },
    ],
    customer: stripeCustomerId,
    success_url: `${process.env.STRIPE_SUCCESS_URL}`,
    cancel_url: `${process.env.STRIPE_CANCEL_URL}`,
  });
  return session;
};
