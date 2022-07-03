import { Request, Response } from 'express';
//? Error Handlers
const ErrorHandler = require('../utils/errorHandler.ts');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const { listAllProduct } = require('../utils/payment');

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
