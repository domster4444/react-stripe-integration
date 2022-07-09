import { Request, Response } from 'express';

const User = require('../models/userModel');

//? Error Handlers
const ErrorHandler = require('../utils/errorHandler.ts');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const { subscriptionStatus } = require('../utils/payment');

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
      return next(
        new ErrorHandler(
          'error occured while creating user subscription session link',
          500
        )
      );
    }
  }
);

//? @route_nature: protected
//? this route will check the subscription status of the user in stripe.com and update userModel's "subscription" field data in database
exports.updateUserSubscription = catchAsyncErrors(
  async (req: Request, res: Response, next: any) => {
    console.log('_______________stripeCustomerId__ CONTROLLER___');
    //@ts-ignore
    console.log(req.user.stripeCustomerId);
    try {
      //@ts-ignore
      const user = await User.findById(req.user._id);
      const userSubscriptionStatus = await subscriptionStatus(
        user.stripeCustomerId
      );

      console.log(
        '__________USER SUBSCRIPTION STATUS_________CONTROLLER_______'
      );
      console.log(userSubscriptionStatus);

      console.log('++++++++++++++++++++++user._id+++++++++++++++++');
      console.log(user._id);
      const updated = await User.findByIdAndUpdate(
        user._id,
        {
          subscription: userSubscriptionStatus,
        },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message:
          "user  subscription has been updated after payment successfully after checking customerId's subscription status from stripeApi",
        data: updated,
      });
    } catch (err) {
      return next(
        new ErrorHandler(
          'error occured while updating user subscription status',
          500
        )
      );
    }
  }
);
