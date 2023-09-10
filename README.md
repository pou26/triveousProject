I've created this shopping cart project.A user can register themselve,choose a product then add it to the cart and then order it successfully.It has 5 models - categoryModel,ProductModel,cartModel,orderModel,userModel and 5 controllers-categoryController,productController,cartController,orderController,userController.In usercontroller we can register and login one user.I've used jwt token for authentication there and I've used bcrypt package for hashing and salting the password,when one user's data will be stored no one can see the real password in the db.I've used AWS-s3 bucket for storing the image also multer package for files and images.It has a middleware also which is having the authentication code.I've used mongodb as database.

for setting up the project first pull the code using git pull and run npm i for installing node modules.

for running the project use npm run start command it'll run on 3000 port.

for postman- I've shared the postman file import it for running and testing the APIs.

