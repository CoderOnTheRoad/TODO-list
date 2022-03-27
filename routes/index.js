//search in google about express router for better understanding
const express = require("express");
const router = express.Router();
//get the home controller from controller folder
const homeController= require("../controllers/home_controller.js");
// 
//use the home controllers action on the router 
router.get("/",homeController.home);
module.exports=router;

