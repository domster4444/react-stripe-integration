import { Request, Response } from 'express';

const express = require('express');
const router = express.Router();

const {
  registerValidator,
  loginValidator,
} = require('../middlewares/validators/testValidator');
const {
  registerUser,
  verifiedRegisterUser,
  createAccountForEmailVerifiedUser,
  loginUser,
  getUserProfileData,
  sendResetPasswordLink,
  resetPassword,
} = require('../controllers/authController');

const {
  getAllPlans,
  addSubscriptionToUser,
  updateUserSubscription,
} = require('../controllers/paymentController');

const isUserLoggedInProd = require('../middlewares/isUserLoggedInProd');
const isUserAdminProd = require('../middlewares/isUserAdminProd');
const isUserCustomerProd = require('../middlewares/isUserCustomerProd');
const isResetTokenValid = require('../middlewares/isResetTokenValid');

router.route('/register').post(registerValidator, registerUser);
router
  .route('/verified-register')
  .post(registerValidator, verifiedRegisterUser);
router
  .route('/create-account-for-email-verified')
  .post(createAccountForEmailVerifiedUser);

router.route('/login').post(loginValidator, loginUser);
router.route('/send-reset-password-email').post(sendResetPasswordLink);
router.route('/reset-password').post(isResetTokenValid, resetPassword);
router
  .route('/profile/:id')
  .get(isUserLoggedInProd, isUserCustomerProd, getUserProfileData);

//? Stripe route
router.route('/plans').get(getAllPlans);
//? route to add subscription to the user in stripe dashboard in stripe.com as this route will create new session and returns session url to addd subscription to the user in stripe.com
router
  .route('/add-subscription-to-use')
  .post(isUserLoggedInProd, isUserCustomerProd, addSubscriptionToUser);
//? route to check if user has subscription or not in stripe.com and if yes, update userModel's subscription field = 'subscription plan'
router
  .route('/update-user-subscription')
  .get(isUserLoggedInProd, isUserCustomerProd, updateUserSubscription);

module.exports = router;
