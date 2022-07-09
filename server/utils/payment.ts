/*//! A test card number. */
//* card number:  4242 4242 4242 4242
//* expiration date:   12/34 // any future date
//* cvv: 123 // any three digits

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
//? our work here is just to create a stripe session obj with payment url, it solely depends on user if he/she will create his subscription or not in stripe.com via that url.
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

export const subscriptionStatus = async (stripeCustomerId: string) => {
  const subscription = await stripe.subscriptions.list({
    customer: stripeCustomerId,
    status: 'all',
    expand: ['data.default_payment_method'],
  });
  return subscription;
};
