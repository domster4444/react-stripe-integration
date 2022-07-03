const jwt = require('jsonwebtoken');

const userModel = require('../models/userModel');

import { Request, Response } from 'express';

var isUserLoggedInProd = async (req: Request, res: Response, next: any) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      token = authorization.split(' ')[1];
      const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      //@ts-ignore
      req.user = await userModel.findById(_id).select('-password');
      next();
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: 'Invalid Token,Unauthorized access is prohibited',
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: 'You are not logged in, please login first',
    });
  }
};

module.exports = isUserLoggedInProd;
