// [x] create ui card for buying
// [x] login in stripe and then create products
// [x] create "/plans" .get method in paymentRoute.ts
// [x] create "listAllProduct" in payment.ts that returns list of plans in array with details
// [x] create "getAllPlans" in paymentController.ts that utilizes "listAllProduct" of payment.ts then returns response
// [x] npm i stripe in backend
// [x] add STRIPE_SECRET_KEY in .env , you can find secret_key from stripe dashboard's homepage
// [x] create payment.ts file with function that returns all product list with prices list
// [x] edit product in stripe.com , click on edit product > additional options present in bottom of page > then add price description as:-
//    -  inside price description field, add value "BASIC" or "ADVANCED" or "PRO"
// we adding pricing plant name in price description field,
// so we can easily identify the pricing plan when stripe returns us   "" list of all product in array  "" on payment.ts
// [x] make priceCards render dynamically based on /plans
