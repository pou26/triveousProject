const express = require('express');
const router = express.Router();
const {createUser,loginUser,getuserprofile,updateUser} = require("../controller/userController")
const {createCategories,getCategories} = require("../controller/categoryController")
const { createProduct, getProductsByCategory, getproduct,updateProduct,deleteproduct } = require('../controller/productController');
const {createCart,updateCart,getCart,deleteCart} = require("../controller/cartController")
const {createOrder,getOrderHistory,updateOrder} = require("../controller/orderController")
const middleWare = require("../middleware/auth")

//===============================userapi============================================//

router.post("/register",createUser)
router.post("/login",loginUser)
router.get("/user/:userId/profile",middleWare.authentication,middleWare.authorization,getuserprofile)
router.put("/user/:userId/profile",middleWare.authentication,middleWare.authorization,updateUser)

//==============================categoryapi=============================================// 
router.post('/createcategories', createCategories);
router.get('/categories', getCategories);

//==============================productapi=============================================// 

router.post("/products",createProduct )
router.get('/products/category/:categoryId',getProductsByCategory);
router.get('/products/:productId',getproduct)
router.put('/products/:productId', updateProduct)
router.delete('/products/:productId', deleteproduct)
//=======================================cart==========================================//

router.post("/users/:userId/cart", middleWare.authentication,middleWare.authorization, createCart)

router.put("/users/:userId/updatecart", middleWare.authentication,middleWare.authorization, updateCart)
router.get("/users/:userId/getcart", middleWare.authentication,middleWare.authorization, getCart)
router.delete("/users/:userId/deletecart", middleWare.authentication,middleWare.authorization, deleteCart)

//==========================================order=============================================//

router.post("/users/:userId/orders",middleWare.authentication,middleWare.authorization, createOrder)
router.get("/users/:userId/orders", middleWare.authentication,middleWare.authorization, getOrderHistory)
router.put("/users/:userId/orders", middleWare.authentication,middleWare.authorization, updateOrder)

router.all("/*",(req,res)=>{
  res.status(400).send({status:false,message:"Endpoint is not correct"})})



module.exports = router;