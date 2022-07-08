import { Request, Response } from 'express';

const User = require('../models/userModel');

//? Error Handlers
const ErrorHandler = require('../utils/errorHandler.ts');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const {
  listAllProduct,
  createStripeCheckoutSession,
} = require('../utils/payment');

/* Exporting the function getAllPrices. */
exports.getAllPlans = catchAsyncErrors(
  async (req: Request, res: Response, next: any) => {
    //returns the list of all product with prices  in array format
    const paymentPriceList = await listAllProduct();
    res.status(200).json({
      success: true,
      data: paymentPriceList,
    });
  }
);

//?  @route_nature: protected
//?  @description :  this will add "subscription plan"  to the user after he clicks buy button and hit's below route
exports.addSubscriptionToUser = catchAsyncErrors(
  async (req: Request, res: Response, next: any) => {
    //todo: @expects : planId from request body

    const { planId } = req.body;
    console.log(
      '==================REQ.USER===from payment controller===============  ',
      //@ts-ignore
      req.user
    );
    //@ts-ignore
    const user = await User.findById(req.user._id);

    try {
      const stripeSession = await createStripeCheckoutSession(
        planId,
        1,
        user.stripeCustomerId
      );
      console.log('=============stripeSession=========');
      console.log(stripeSession);
      res.status(200).json({
        success: true,
        message: 'Stripe session link created successfully',
        data: {
          url: stripeSession.url,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
);
