# ShopPlusPLus Ecommerce App

This repository contains a shopping app built using the 
MERN stack.Please follow the instructions to set it up.

**Features**

1.  Product Categories
2.  Admin Section
3.  Interactive Cart
4.  Product Wishlist
5.  Payment using cards and PayPal
6.  Filter Product By Categories and price

> [Working Demo](https://www.myapp.com/)
>
> ### Instructions
>
> 1. Clone the repo and   cd server run ``npm install`` and cd app  ``npm install``
> 2. visit site https://www.braintreepayments.com/ sign up 
>    login and copy Merchant Id,Public key,Private key and paste to  .env file in server folder
>    goto setting press processing and enable paypal link sandbox
>    then type paypal client id and paypal client secret id 
>    link paypal with braintree for payment through paypal account 
> 3. copy MONGO_URL,JWT_SECRET form monogodb database and paste in  .env file of server folder
> 4. copy this link REACT_APP_API= http://localhost:8080 paste  in .env file of app folder
> 4. From the server folder run ``npm run dev``
>
> **Running a  bash script**
 ```sh
cd ./App
``npm install``
cd server
``npm install``
``npm run dev``
```
>
> 